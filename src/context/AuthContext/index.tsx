import { fetcher } from '@/api/fetcher'
import { apiBaseUrl } from '@/config'
import { PropsWithChildren, createContext, useContext } from 'react'
import useSWR from 'swr'

type User = {
  email: string
  username: string
}

type AuthContextData = {
  user?: User
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  mutate: () => Promise<User | undefined>
}

const AuthContext = createContext<AuthContextData>({
  isLoading: false,
  user: undefined,
  signIn: async () => {},
  signOut: async () => {},
  mutate: async () => undefined,
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = (props: PropsWithChildren) => {
  const { children } = props

  const credentialFetcher = (url: string) =>
    fetcher(url, { withCredentials: true })

  const {
    data: userInfo,
    isLoading,
    mutate,
  } = useSWR<User>(`${apiBaseUrl}/auth/me`, credentialFetcher)

  const signinFunc = async (email: string, password: string) => {
    try {
      const url = `${apiBaseUrl}/auth`
      await fetcher(url, {
        method: 'POST',
        data: {
          email: email,
          password: password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      await mutate()
    } catch (err) {
      console.log('signin failure')
      console.log(err)
      throw err
    }
  }

  const data: AuthContextData = {
    user: userInfo,
    isLoading,
    signIn: signinFunc,
    signOut: async () => {},
    mutate: mutate,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

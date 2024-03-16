import { fetcher } from '@/api/fetcher'
import { apiBaseUrl } from '@/config'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

type User = {
  accessToken: string
  idToken: string
  refreshToken: string
}

type UserInfo = {
  email: string
  username: string
}

function parseToken(token: string): UserInfo {
  // TODO
  return {
    email: '',
    username: '',
  }
}

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  user?: User
  mutate: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({
  signIn: async () => {},
  signOut: async () => {},
  user: undefined,
  mutate: async () => {},
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = (props: PropsWithChildren) => {
  const { children } = props
  const [user, setUser] = useState<User>()

  const signinFunc = async (email: string, password: string) => {
    try {
      const url = `${apiBaseUrl}/auth`
      const response: User = await fetcher(url, {
        method: 'POST',
        data: {
          email: email,
          password: password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setUser(response)
    } catch (err: unknown) {
      console.log('signin failure')
      console.log(err)
      throw err
    }
  }

  const mutateFunc = async () => {
    const url = `${apiBaseUrl}/auth/me`
    if (user === undefined) {
      console.log('session is invalid')
      return
    }
    try {
      await fetcher(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
      })
    } catch (err: unknown) {
      console.log('session is invalid')
      console.log(err)
      setUser(undefined)
    }
  }

  const data: AuthContextData = {
    user,
    signIn: signinFunc,
    signOut: async () => {},
    mutate: mutateFunc,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

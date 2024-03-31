import { UserInfo } from '@/types/user'
import { fetchAuthSession, signOut } from '@aws-amplify/auth'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

type SessionContextData = {
  userInfo?: UserInfo
  isLoading: boolean
  error?: Error
  signOut: () => Promise<void>
  mutate: () => Promise<void>
}

export const useSessionContext = () =>
  useContext<SessionContextData>(SessionContext)

const SessionContext = createContext<SessionContextData>({
  isLoading: false,
  signOut: async () => {},
  mutate: async () => {},
})

export const SessionContextProvider = (props: PropsWithChildren) => {
  const { children } = props
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const mutateFunc = async () => {
    try {
      setIsLoading(true)
      const data = await fetchAuthSession()
      if (data && data.tokens?.idToken?.payload) {
        const tokenPayload = data.tokens.idToken.payload
        const username = tokenPayload['name']?.toString()
        const email = tokenPayload['email']?.toString()
        if (username && email) {
          const info = { username, email }
          setUserInfo(info)
        }
      }
    } catch (error) {
      console.log(error)
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error('An unknown error occurred'))
      }
    } finally {
      setIsLoading(false)
    }
  }

  const signOutFunc = async () => {
    try {
      await signOut()
      console.log('sign out')
    } catch (error) {
      console.log(error)
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error('An unknown error occurred'))
      }
    } finally {
      setUserInfo(undefined)
    }
  }

  const data: SessionContextData = {
    userInfo,
    isLoading,
    error,
    signOut: signOutFunc,
    mutate: mutateFunc,
  }

  return (
    <SessionContext.Provider value={data}>{children}</SessionContext.Provider>
  )
}

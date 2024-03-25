import { useSessionContext } from '@/context/SessionContext'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { useEffect } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`

const LogoutText = styled.span`
  margin-left: 10px;
  border-bottom: 1px solid blue;
  color: blue;
  font-size: 20px;
  cursor: pointer;
`

export const Header = () => {
  const { user, signOut } = useAuthenticator()
  const { userInfo, isLoading, mutate } = useSessionContext()

  useEffect(() => {
    mutate()
  }, [])

  return (
    <div>
      {user && !isLoading && (
        <HeaderContainer>
          <div></div>
          <div>
            {userInfo && `Hi! ${userInfo.username}`}
            <LogoutText onClick={signOut}>Logout</LogoutText>
          </div>
        </HeaderContainer>
      )}
    </div>
  )
}

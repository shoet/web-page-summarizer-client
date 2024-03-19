import { useAuthContext } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const handleOnSignOut = async () => {
    await signOut()
    navigate('/auth')
  }

  const { signOut, isLoading, user } = useAuthContext()
  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        user && (
          <HeaderContainer>
            <div></div>
            <div>
              Hi! {user.username}
              <LogoutText onClick={handleOnSignOut}>Logout</LogoutText>
            </div>
          </HeaderContainer>
        )
      )}
    </div>
  )
}

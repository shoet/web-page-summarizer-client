import { useSessionContext } from '@/context/SessionContext'
import { useEffect } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`

const LogoutButton = styled.button`
  margin-left: 10px;
  border: none;
  background-color: gray;
  color: white;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    transition: 0.3s;
  }
`

export const Header = () => {
  const { userInfo, mutate, signOut } = useSessionContext()

  useEffect(() => {
    mutate()
  }, [])

  return (
    <div>
      <HeaderContainer>
        <div>
          <h1>Webページ要約</h1>
        </div>
        {userInfo && (
          <div>
            <span>こんにちは！ {userInfo.username} さん</span>
            <LogoutButton onClick={signOut}>Logout</LogoutButton>
          </div>
        )}
      </HeaderContainer>
    </div>
  )
}

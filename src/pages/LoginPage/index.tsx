import { ErrorMessage } from '@/components/Molecules/ErrorMessage'
import { useAuthContext } from '@/context/AuthContext'
import { SigninForm } from '@/features/auth/components/SigninForm'
import { useState } from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`

const EmptyContainer = styled.div`
  min-height: 250px;
`

const ErrorContainer = styled.div`
  width: 80%;
  position: absolute;
  top: 10px;
`

export const LoginPage = () => {
  const { signIn } = useAuthContext()
  const [error, setError] = useState('')

  const handleSignIn = async (email: string, password: string) => {
    try {
      await signIn(email, password)
    } catch (error) {
      setError('Error signing in')
    }
  }

  return (
    <>
      <OuterContainer>
        {error && (
          <ErrorContainer>
            <div style={{ marginBottom: '5px' }}>
              <ErrorMessage message={error} onCloseClick={() => setError('')} />
            </div>
          </ErrorContainer>
        )}
        <EmptyContainer />
        <FormContainer>
          <SigninForm signin={handleSignIn} />
        </FormContainer>
      </OuterContainer>
    </>
  )
}

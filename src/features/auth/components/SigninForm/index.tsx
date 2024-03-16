import { useForm } from 'react-hook-form'
import styled from 'styled-components'

type SigninFormProps = {
  signin: (email: string, password: string) => Promise<void>
}

type SigninFormData = {
  email: string
  password: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const TextInput = styled.input<{ hasError?: boolean }>`
  type: text;
  outline: none;
  border: 1px solid #B2BEB5;
  border-radius: 5px;
  line-height: 32px;
  font-size: 24px;
  padding: 5px 10px;
  &::placeholder {
    vertical-align: center;
    font-size: 20px;
  }
  ${({ hasError }) => hasError && `border-color: red;`}
`

const SubmitButton = styled.button`
  margin: 0px auto;
  width: 50%;
  font-size: 30px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #B2DFDB;
  cursor: pointer;
  letter-spacing: 3px;
`

const ValidationMessage = styled.div`
  text-align: left;
  font-size: 14px;
  color: red;
`

const HeightSpacer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px;`}
`

export const SigninForm = (props: SigninFormProps) => {
  const { signin } = props

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SigninFormData>()

  const onSubmit = async (data: SigninFormData) => {
    try {
      await signin(data.email, data.password)
    } catch (err) {
      console.log('submit failed')
      throw err
    }
  }

  return (
    <form>
      <Container>
        <TextInput
          placeholder="Email"
          {...register('email', {
            required: 'メールアドレスを入力してください。',
          })}
          hasError={!!errors.email}
        />
        {errors.email && (
          <ValidationMessage>{errors.email.message}</ValidationMessage>
        )}
        <HeightSpacer height={10} />
        <TextInput
          placeholder="Password"
          type="password"
          {...register('password', {
            required: 'パスワードを入力してください。',
          })}
          hasError={!!errors.password}
        />
        {errors.password && (
          <ValidationMessage>{errors.password.message}</ValidationMessage>
        )}
        <HeightSpacer height={30} />
        <SubmitButton onClick={handleSubmit(onSubmit)}>SignIn</SubmitButton>
      </Container>
    </form>
  )
}

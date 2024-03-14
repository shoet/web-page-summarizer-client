import { XmarkIcon } from '@/components/Element/Icon'
import styled from 'styled-components'

type ErrorMessageProps = {
  message: string
  onCloseClick?: () => void
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid red;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #f8d7da;
`

const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { message, onCloseClick } = props

  return (
    <Container onClick={onCloseClick}>
      <ErrorText>{message}</ErrorText>
      <XmarkIcon size={14} color="#ff7000" />
    </Container>
  )
}

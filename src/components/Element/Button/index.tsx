import styled from 'styled-components'

export const Button = () => {
  const Container = styled.div`
    color: ${({ theme }) => theme.color.primary};
  `
  return <Container>hoge</Container>
}

import { PropsWithChildren } from 'react'
import styled from 'styled-components'

type BadgeProps = {
  text: string
  color: string
  backgroundColor: string
  fontSize: string
}

const BadgeContainer = styled.div<BadgeProps>`
color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  font-weight: bold;
`

export const Badge = (props: PropsWithChildren<BadgeProps>) => {
  const { children } = props
  return <BadgeContainer {...props}>{children}</BadgeContainer>
}

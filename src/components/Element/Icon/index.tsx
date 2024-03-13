import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { faArrowLeft, faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'

type IconProps = {
  size: number
  color: string
}

const IconStyle = styled.span<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => `${color}`};
`

const withIconStyle = (Icon: ReactNode) => {
  return (props: IconProps) => {
    return <IconStyle {...props}>{Icon}</IconStyle>
  }
}

export const EnterIcon = withIconStyle(<FontAwesomeIcon icon={faArrowLeft} />)

const TurnLeftIcon = () => {
  // 時計回りに90度回転する
  const RotateContainer = styled.div`
    transform: rotate(90deg);
  `

  // 下向きにする
  const FlipContainer = styled.div`
    transform: scale(1, -1);
  `

  return (
    <RotateContainer>
      <FlipContainer>
        <FontAwesomeIcon icon={faArrowTurnUp} />
      </FlipContainer>
    </RotateContainer>
  )
}

export const EnterIcon2 = withIconStyle(<TurnLeftIcon />)

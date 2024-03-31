import { Footer } from '@/components/Molecules/Footer'
import { Header } from '@/components/Molecules/Header'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const MainContaienr = styled.div`
  min-width: 1200;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainContaienr>{props.children}</MainContaienr>
      <Footer />
    </div>
  )
}

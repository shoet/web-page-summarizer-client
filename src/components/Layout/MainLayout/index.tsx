import { Footer } from '@/components/Molecules/footer'
import { Header } from '@/components/Molecules/header'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const MainContaienr = styled.div`
  min-width: 1200px;
  margin: 0 auto;
`

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <MainContaienr>{props.children}</MainContaienr>
      <Footer />
    </div>
  )
}

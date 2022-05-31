import React from 'react'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

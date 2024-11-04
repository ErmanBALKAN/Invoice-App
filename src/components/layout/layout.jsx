import React from 'react'
import { GlobalStyle } from '../../styles/global'
import Header from './header/header'
import { SideBar } from './sidebar/sidebar'    

const Layout = ({ children })  => {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <SideBar />
      {children}
    </>
  )
}

export default Layout
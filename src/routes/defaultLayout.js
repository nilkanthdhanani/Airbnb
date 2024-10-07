import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/header'
import Footer from '../common/footer'
import Selectionbar from '../common/selectionbar'
import HeaderBottom from '../common/headerBottom'

export default function DefaultLayout() {
  return (
    <>
      <div className="header-main">
        <Header />
        <Selectionbar />
      </div>
      <Outlet />
      <Footer />
      <HeaderBottom />
    </>
  )
}

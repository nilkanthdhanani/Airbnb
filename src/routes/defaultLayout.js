import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../commen/header'
import Footer from '../commen/footer'
import Selectionbar from '../commen/selectionbar'
import HeaderBottom from '../commen/header/headerBottom'

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

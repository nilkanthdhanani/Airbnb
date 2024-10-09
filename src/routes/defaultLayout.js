import React from "react";
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';
import Selectionbar from '../common/selectionbar';
import HeaderBottom from '../common/headerBottom';

export default function DefaultLayout() {
  const location = useLocation();

  const hideHeaderAndFooter = location.pathname === '/wishlists' || location.pathname === '/login';
  const hideHeader = location.pathname === '/yourhome';

  return (
    <>
      {!hideHeaderAndFooter && !hideHeader && (
        <header>
          <Header />
          <Selectionbar />
        </header>
      )}
      <main>
        <Outlet />
      </main>
      {!hideHeaderAndFooter && <Footer />}
      {!hideHeader && <HeaderBottom />}
    </>
  );
}

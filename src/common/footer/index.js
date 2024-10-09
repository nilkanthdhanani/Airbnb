import React from 'react';
import { useLocation } from 'react-router-dom';
import './footer.scss';
import Inspiration from './inspiration/inspiration';
import FooterList from './footerList';

export default function Footer() {
  const location = useLocation();

  const hideInspiration = location.pathname === '/yourhome';

  return (
    <footer>
      {!hideInspiration && <Inspiration />}
      <FooterList />
    </footer>
  );
}

import React from "react";
import './footer.scss';
import Inspiration from './inspiration/inspiration';
import FooterList from './footerList';

export default function Footer() {
  return (
    <footer>
      <Inspiration />
      <FooterList />
    </footer>
  );
}

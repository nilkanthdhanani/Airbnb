import React from "react";
import './wishlist.scss';
import { NavLink } from 'react-router-dom';

export default function Wishlist() {
  return (
    <div className="wishlist">
      <h2>Wishlists</h2>
      <h3>Log in to view your wishlists</h3>
      <p>You can create, view, or edit wishlists once you’ve logged in.</p>
      <NavLink to={"/login"}><button>Log in</button></NavLink>
    </div>
  )
}

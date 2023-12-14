import React from "react";
import "../styles/Navbar.css";
import { TbBrandHexo } from 'react-icons/tb';
import {BsHandbag} from "react-icons/bs"

function Navbar() {
  return (
    <div id="navbar-container">
        <div id="icon">
            <TbBrandHexo id="icon-in-div"/>
        </div>
        <BsHandbag id="hand-bag" />
        <div id="number-of-products">
            2
        </div>
    </div>

  )
}

export default Navbar;

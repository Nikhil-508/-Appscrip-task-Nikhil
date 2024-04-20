import React from 'react'
import './Nav.css'
import { FiHeart } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";

const Nav = () => {
  return (
    <>
    
    <nav>
        <div className='nav-flower'>
            <a  href=""><IoLogoReact className='logo-icon'/></a>
        </div>
        <div className='nav-logo'>
            <h3 style={{fontSize:'2rem'}}>LOGO</h3>
        </div>
        <div className='nav-icons'>
            <a href=""><IoIosSearch /></a>
            <a href=""><FiHeart /></a>
            <a href=""><LiaShoppingBagSolid /></a>
            <a href=""><BiUser /></a>
            <a style={{textDecoration:'noone'}} href="">ENG <BiChevronDown /></a>

        </div>
    </nav>
    </>
        
  )
}

export default Nav

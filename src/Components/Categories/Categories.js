import React from 'react'
import './Categories.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';

const Categories = () => {
  return (
    <>   
<div className='categories'>
    <h3>SHOP</h3>
    <h3>SKILLS</h3>
    <h3>STORIES</h3>
    <h3>ABOUT</h3>
    <h3>CONTACT US</h3>
  </div>
<div className='title'>
    <h2 style={{fontSize:"2rem",display:"flex",justifyContent:"center"}}>DISCOVER OUR PRODUCTS</h2>
    <p style={{margin:"2rem",display:"flex",justifyContent:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum rutrum diam, id mollis quam imperdiet pulvinar. Cras quis purus semper, imperdiet erat at, convallis velit. In eu turpis vestibulum, vulputate mi et, venenatis tortor. Donec lacinia rhoncus mauris, sit amet</p>
</div>
<div className='recommandBar'>
  <h4>3425 ITEMS</h4>
  <a href="sample"> <MdKeyboardArrowLeft /> HIDE ALL</a>
  <div className='dropdown'>
  <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic">
        RECOMMENDED
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">NEWEST FIRST</Dropdown.Item>
        <Dropdown.Item href="#/action-2">POPULAR</Dropdown.Item>
        <Dropdown.Item href="#/action-3">PRICE: HIGH TO LOW</Dropdown.Item>
        <Dropdown.Item href="#/action-3">PRICE: LOW TO HIGH</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
</div>
</>
  )
}

export default Categories

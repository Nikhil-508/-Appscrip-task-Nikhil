import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div id="sidebar">
  <div classNameName="sidebar-header">
    <a href="#">CUSTOMIZABLE</a>
  </div>
  <div className="sidebar-content">
    <ul>
      <li className="category-item">
        <a href="#">IDEAL FOR</a>
        <ul className="sub-menu">
          <li><a href="#">All</a></li>
          <li><a href="#">MEN</a></li>
          <li><a href="#">WOMEN</a></li>
          <li><a href="#">KIDS</a></li>
        </ul>
      </li>
      <li className="category-item">
        <a href="#">OCCASION</a>
        <ul className="sub-menu">
          <li><a href="#">All</a></li>
          <li><a href="#">All Suitable</a></li>
        </ul>
      </li>
      <li className="category-item">
        <a href="#">WORK</a>
        <ul className="sub-menu">
          <li><a href="#">All</a></li>
          <li><a href="#">All Suitable</a></li>
        </ul>
      </li>
      <li className="category-item">
        <a href="#">FABRIC</a>
        <ul className="sub-menu">
          <li><a href="#">All</a></li>
          <li><a href="#">All Suitable</a></li>
        </ul>
      </li>
      <li className="category-item">
        <a href="#">SEGMENT</a>
        <ul className="sub-menu">
          <li><a href="#">All</a></li>
          <li><a href="#">All Suitable</a></li>
        </ul>
      </li>
      <li className="category-item">
        <a href="#">SUITABLE FOR</a>
        <ul className="sub-menu">
          <li><a href="#">All</a></li>
          <li><a href="#">All Suitable</a></li>
        </ul>
      </li>
      <li className="category-item">
        <a href="#">RAW MATERIALS</a>
        <ul className="sub-menu">
          <li><a href="#">All</a></li>
        </ul>
      </li>
      <li className="category-item">
        <a href="#">PATTERN</a>
        <ul className="sub-menu">
          <li><a href="#">All</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Sidebar

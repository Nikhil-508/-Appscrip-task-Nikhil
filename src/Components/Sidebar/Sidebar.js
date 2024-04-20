import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div id="sidebar">
  <div class="sidebar-header">
    <a href="#">CUSTOMIZABLE</a>
    <span class="new">NEW</span>
  </div>
  <div class="sidebar-content">
    <ul>
      <li class="category-item">
        <a href="#">IDEAL FOR</a>
        <ul class="sub-menu">
          <li><a href="#">All</a></li>
          <li><a href="#">All Occasions</a></li>
          <li><a href="#">All Work</a></li>
          <li><a href="#">All Fabric</a></li>
        </ul>
      </li>
      <li class="category-item">
        <a href="#">SEGMENT</a>
        <ul class="sub-menu">
          <li><a href="#">All</a></li>
          <li><a href="#">All Suitable</a></li>
        </ul>
      </li>
      <li class="category-item">
        <a href="#">RAW MATERIALS</a>
        <ul class="sub-menu">
          <li><a href="#">All</a></li>
        </ul>
      </li>
      <li class="category-item">
        <a href="#">PATTERN</a>
        <ul class="sub-menu">
          <li><a href="#">All</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="sidebar-footer">
    <a href="#">Sign in o</a>
  </div>
</div>
  )
}

export default Sidebar

"use client"
import React from 'react'
import './globals.css'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {

  function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div class="topnav" id="myTopnav">
        {/* <a href="#home" class="active">Home</a> */}
        <a href="/">Dr. Himanshu</a>
        <a href="/">Home</a>
        <a href="/product">Products</a>
        <a href="/treatments">Treatments</a>
        <a href="/gallery">Gallery</a>
        <a href="/results">Results</a>
        <a href="/about">About Doctors</a>

        <a href="javascript:void(0);" class="icon" onClick={menu}>
          <AiOutlineMenu />
        </a>
      </div>

    </>
  )
}

export default Navbar
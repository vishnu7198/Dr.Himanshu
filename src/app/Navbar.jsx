"use client"
import React from 'react'
import './globals.css'
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';


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
        <Link href="/">Dr. Himanshu</Link>
        <Link href="/">Home</Link>
        <Link href="/product">Products</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/results">Results</Link>
        <Link href="/about">About Doctors</Link>
        <Link href="javascript:void(0);" class="icon" onClick={menu}>
          <AiOutlineMenu />
        </Link>
      </div>

    </>
  )
}

export default Navbar
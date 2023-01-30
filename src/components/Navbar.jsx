/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2023-01-26 00:14:16
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2023-01-30 19:02:00
 * @Description: file content
 * @FilePath: /react-cms-tailwind/src/components/Navbar.jsx
 */
import React, { useState } from 'react'
import { close, menu, logo } from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(true) //usf

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className="w-screen h-[80px] z-10 bg-white  drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px]">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[65px]"
          ></img>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex  sm:mr-10 md:mr-10">
          <button className="border-none bg-transparent text-black mr-4">
            Login
          </button>
          <button className="px-8 py-3">Sign up</button>
        </div>

        <div className="md:hidden">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="mr-10 h-[38px] object-contain"
            onClick={handleClick}
          ></img>
        </div>
      </div>

      <ul
        className={
          !toggle ? 'bg-white w-full absolute px-8 md:hidden' : 'hidden'
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>Platform</li>
        <li>Pricing</li>
        <div className="flex flex-col my-4">
          <button className=" bg-transparent text-black mr-4 mb-4 px-8 py-3">
            Login
          </button>
          <button className="px-8 py-3">Sign up</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar

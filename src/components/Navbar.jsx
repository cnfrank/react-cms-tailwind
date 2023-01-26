/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2023-01-26 00:14:16
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2023-01-26 13:49:24
 * @Description: file content
 * @FilePath: /react-cms-tailwind/src/components/Navbar.jsx
 */
import React from 'react'
import {close,menu,logo} from '../assets'

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>Navbar {logo}</div>
  )
}

export default Navbar

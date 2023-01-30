/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2023-01-30 22:00:35
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2023-01-31 00:08:48
 * @Description: file content
 * @FilePath: /react-cms-tailwind/src/components/Footer.jsx
 */
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#02044A] text-gray-50 p-8">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="pb-8">
          <h6 className="font-bold uppercase py-2"> Solutions</h6>
          <ol>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
          </ol>
        </div>
        <div className="pb-8">
          <h6 className="font-bold uppercase py-2"> Solutions</h6>
          <ol>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
          </ol>
        </div>
        <div className="pb-8">
          <h6 className="font-bold uppercase py-2"> Solutions</h6>
          <ol>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
          </ol>
        </div>
        <div className="pb-8">
          <h6 className="font-bold uppercase py-2"> Solutions</h6>
          <ol>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Marketing</li>
          </ol>
        </div>

        <div className="col-span-2 pt-2 md:pt-2">
          <p className="font-bold uppercase ">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news,atticles,and resources send to your inbox weekly.
          </p>

          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              className="w-full p-2 mr-4 rounded-md mb-2"
              placeholder="Enter email"
            />
            <button className="p-2  mb-2  bg-green-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer

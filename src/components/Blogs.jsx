/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2023-01-30 17:53:25
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2023-01-31 16:12:51
 * @Description: file content
 * @FilePath: /react-cms-tailwind/src/components/Blogs.jsx
 */
import React from 'react'

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellendus',
      coverImg:
        'https://img.freepik.com/premium-vector/react-js-logo-design-collection_610324-4.jpg?w=2000',
    },
    {
      id: 2,
      title: 'Blog 2',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellendus',
      coverImg:
        'https://img.freepik.com/premium-vector/react-js-logo-design-collection_610324-4.jpg?w=2000',
    },
    {
      id: 3,
      title: 'Blog 3',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellendus',
      coverImg:
        'https://img.freepik.com/premium-vector/react-js-logo-design-collection_610324-4.jpg?w=2000',
    },
  ]
  return (
    <div className="w-full bg-[#f9f9f9] py-[50px] relative">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 text-black">
          {blogs.map((blog) => (
            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md" key={blog.id}>
              <img
                src={
                  'https://img.freepik.com/premium-vector/react-js-logo-design-collection_610324-4.jpg?w=2000'
                }
                className="h-56 w-full object-cover"
                alt=""
              />
              <div className="p-8">
                <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                <p className="text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reiciendis repellendus fugit sequi tempore temporibus
                  exercitationem error aliquam, et ducimus porro, non facere
                  unde perspiciatis deserunt ab? Repellendus provident hic
                  facilis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs

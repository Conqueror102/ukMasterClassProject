import React from 'react'

const Learn = ({icon, bold, text}) => {
  return (
    <div>
        <div className="flex justify-between items-center gap-x-6 group border-b-gray-400 border-b-[1px]">
          <div className="rounded-full p-5 bg-[#16a571] group:text-green text-white text-2xl">
          {icon}
          </div>
          <div className="py-7">
            <p className="text-2xl font-bold mb-4"> {bold}</p>
            <p>
                {text}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Learn
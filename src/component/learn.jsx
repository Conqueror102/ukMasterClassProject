import React from 'react'

const Learn = ({icon, bold, text}) => {
  return (
    <div>
        <div className="flex  py-7 max-sm:py-5 gap-x-6 group border-b-gray-400 border-b-[1px]">
          <div className="rounded-full p-5 h-15 w-15 max-sm:w-10 max-sm:h-10 flex items-center   bg-[#0b9764] group:text-green text-white text-2xl max-sm:p-3">
          {icon}
          </div>
          <div className="">
            <p className="text-2xl font-bold mb-4 max-sm:mb-2 max-sm:text-[16px]"> {bold}</p>
            <p className='text-[#777777] max-sm:text-[14px]'>
                {text}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Learn
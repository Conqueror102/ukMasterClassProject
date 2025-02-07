import React from 'react'


const Contact = ({icon,className,text}) => {
  return (
    <>
    <div className={`flex gap-5 max-sm:items-center ${className} max-sm:mb-5`}>
    <div className='rounded-full  h-14 w-14 text-2xl flex items-center max-sm:h-8 max-sm:w-8 cursor-pointer hover:bg-[#238570] justify-center bg-[#16A571] text-white'>
    {icon}
    </div>
    <div>
        <p className='text[#777777]'>{text}</p>
        <p className='text-md font-semibold'>080 456 789 00</p>
    </div>
    </div>
    </>
  )
}

export default Contact
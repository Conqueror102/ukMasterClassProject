import React from 'react'

const Services = ({boldText, text, icon}) => {
  return (
    <>
 <div className='flex space-x-5 items-center'>
            <div>
            <img src={icon} alt="" />
            </div>
          <div className='text-[#777777]'>
          <p className='text-black font-semibold text-lg'>
            {boldText}</p>
            <p className='text-[#777777]'>
        {text}
            </p>
          </div>
          </div>
    </>
  )
}

export default Services
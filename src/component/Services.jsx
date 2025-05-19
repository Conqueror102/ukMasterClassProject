import React from 'react'

const Services = ({ boldText, text, icon }) => {
  return (
    <>
      <div className='flex space-x-5 items-center'>
        <div className='max-sm:'>
          <img src={icon} alt="" />
        </div>

        <div className='text-[#777777]'>
          <p className='text-black font-semibold text-lg max-sm:text-[16px]'>
            {boldText}
          </p>

          <p className='text-[#777777] max-sm:text-[14px]'>
            {text}
          </p>
        </div>
      </div>
    </>
  )
}

export default Services
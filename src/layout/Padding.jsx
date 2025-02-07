import React from 'react'

const Padding = ({children}) => {
  return (
    <div className="flex w-full h-full  justify-center ">
      <div className="w-[85%]  max-sm:w-[90%] ">{children}</div>
    </div>
  )
}

export default Padding
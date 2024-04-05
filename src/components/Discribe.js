import React from 'react'
const Discribe = (props) => {
   
  return (
    <>
    <div className='grid place-content-center h-[250px] space-y-3'>
        <div className='font-bold text-4xl'>
            {props.title}
        </div>
        <div className="grid place-content-center text-sm/8 font-normal">
            {props.desc}
        </div>
    </div>
    </>
    )
}

export default Discribe

// Continue button
import { Link } from 'react-router-dom';
import React from 'react'

const Continue = (prop) => {
  return (
    <>
        <div className='grid place-content-center'>

        <Link to={prop.page}>
            <button class="rounded-md bg-slate-700 hover:bg-slate-500">
                <div className='px-4 py-2 text-white'>Continue</div>
            </button>
        </Link>
        </div>
    </>
  )
}

export default Continue
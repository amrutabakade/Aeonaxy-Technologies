import React from 'react';

function Page35(props) {
  return (
    <>
      <div className="px-11 grid grid-cols-1 py-[100px] md:grid-cols-2 gap-11">
        <div className="flex justify-center md:justify-start md:justify-center">
          <img className="h-[300px] w-[400px]" src={props.img} alt='t'/>
        </div>
        <div className="md:pl-8 md:pr-8">
          <div className='text-left font-bold text-4xl'>
            {props.title}
          </div>
          <div className="text-left text-sm font-normal pt-4">
            {props.desc}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page35;

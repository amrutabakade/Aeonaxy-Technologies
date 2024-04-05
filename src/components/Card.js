import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallWindow(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className={`rounded-md w-1/3 h-11 ${isSmallWindow ? 'h-[150px] w-[250px]': 'h-11'} border border-black border-inherit sm:border-2 sm:p-4 flex items-center hover:border-yellow-500 hover:shadow-lg`}>
        <div className='p-1'>
          <img className='h-10 w-11' src={props.prop1} alt=''/>
        </div>
        <div className='p-1'>
          {props.prop2}
        </div>
      </div>
    </div>
  );
};

export default Card;

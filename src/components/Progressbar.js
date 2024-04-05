import React from 'react';

function ProgressLine({ percentage }) {
    return (
        <>
        <div className="relative pt-11 w-full px-[100px]">
            <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-gray-200">
                <div
                    style={{ width: `${percentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                ></div>
            </div>
        </div>  
        </>
    );
}

export default ProgressLine;

import React, { useEffect } from 'react';

function Card2(props) {
    useEffect(() => {
        // Load MathJax script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
            MathJax = {
                tex: {
                    inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]
                }
            };
        `;
        document.head.appendChild(script);

        const mathjaxScript = document.createElement('script');
        mathjaxScript.type = 'text/javascript';
        mathjaxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML';
        mathjaxScript.async = true;
        document.head.appendChild(mathjaxScript);

        return () => {
            // Cleanup when component unmounts
            document.head.removeChild(script);
            document.head.removeChild(mathjaxScript);
        };
    }, []);

    return (
        <>
            <div className='justify-center items-center h-[300px] w-[300px] bg-white border border-black border-inherit 
            rounded-lg overflow-hidden hover:border-yellow-500 hover:shadow-lg'>
            <div className="text-center py-[100px]">
                <div id="math-formula" className="mb-4 text-2xl">
                    {props.formula}
                </div>
                <h2 className="text-sm font-normal">{props.prop2}</h2>
                <h2 className='text-gray-500'> {props.prop3}</h2>
            </div>
            </div>
        </>
    );
}

export default Card2;



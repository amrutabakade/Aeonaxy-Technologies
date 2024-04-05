import React from 'react';
import Discribe from './Discribe';
import Card2 from './Card2';
import Continue from './Continue';
import Progressbar from './Progressbar';

const Page4 = () => {
  const arr=[
    {"formula":"\\( 5 \\times \\frac{1}{2} \\)",
     "prop2":"Arithmetic",
     "prop3":"Introductory"
    },
     {
      "formula":"3x + 5 = 4",
      "prop2":"Basic Algebra ",
      "prop3":"Foundational"
     },
     {
      "formula":"\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\) ",
      "prop2":"Intermediate Algebra ",
      "prop3":"Intermediate"
     },
     {
      "formula":"\\(\\int_{0}^{L} x^2 \\, dx\\) ",
      "prop2":"Calculus ",
      "prop3":"Advanced"
     }
  ]
  
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen">
     <Progressbar percentage={80}/>
      <Discribe title="What is your math comfort level" desc="Choose the highest level you feel confident in - you can always adjust later"/>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          arr.map((ele)=>(
            <Card2 formula = {ele.formula} prop2={ele.prop2} prop3={ele.prop3}/>
          ))
        }
      </div>

      <div className='pt-11'>
          <Continue page="/p5"/>
      </div>
     </div>
      
    </>
  );
};

export default Page4;

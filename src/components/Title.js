//Fist Page

import React from 'react'
import Card from './Card';
import Continue from './Continue';
import Discribe from './Discribe';
import Progressbar from './Progressbar';

const Title = () => {
    const data = [
        {
            "imgUrl":"https://th.bing.com/th?q=Student+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
            "desc":"Students or soon to be enrolled"
        } ,
        {
            "imgUrl":"https://th.bing.com/th/id/OIP.cyMGFBE6PYrvrrFG-ThjWAHaGL?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "desc":"Professional pursuing a carrer"
        },
        {
            "imgUrl":"https://th.bing.com/th?q=Parents+Association+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
            "desc":"Parent of a school-age child"
        },
        {  
            "imgUrl":"https://th.bing.com/th/id/OIP.iI9bb_In0sG_SBxw-YqIoAAAAA?w=126&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "desc":"Lifelong learner"
        },
        {
            "imgUrl":"https://th.bing.com/th?q=Teacher+Clip+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
            "desc":"Teacher"
        },
        {
            "imgUrl":"https://th.bing.com/th/id/OIP.yyNTgv6_LsPd5U7I4o5jDQHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "desc":"Other"
        }];


  return (
    <>
    <Progressbar percentage={20}/>
    <Discribe title="Which discribes you best ?" desc="This will help you personalize your experience."/>
    <div className='space-y-4'>
        {data.map((element) => (
            <Card prop1={element.imgUrl}  prop2={element.desc} />
        ))}
    </div>
    <div className= 'py-[40px]'>
       <Continue page = "/p2"/>
    </div>
    </>
  )
}

export default Title
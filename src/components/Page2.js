import React from 'react'
import Discribe from './Discribe';
import Card from './Card';
import Continue from './Continue';
import Progressbar from './Progressbar';

const Page2 = () => {
    const data = [
        {
            "imgUrl":"https://th.bing.com/th?q=Student+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
            "desc":"Learning specific skill to advance my career"
        } ,
        {
            "imgUrl":"https://th.bing.com/th/id/OIP.cyMGFBE6PYrvrrFG-ThjWAHaGL?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "desc":"Exploring new topics i'm interested in"
        },
        {
            "imgUrl":"https://th.bing.com/th?q=Parents+Association+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
            "desc":"Refreshing my math foundation"
        },
        {  
            "imgUrl":"https://th.bing.com/th/id/OIP.iI9bb_In0sG_SBxw-YqIoAAAAA?w=126&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "desc":"Exercising my brain to stay sharp"
        },
        {
            "imgUrl":"https://th.bing.com/th?q=Teacher+Clip+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
            "desc":"Something else"
        }];


  return (
    <>
        <Progressbar percentage={40}/>
        <Discribe
            title="Which are you most interested in" 
            desc="Choose just one. this will help us get you started but won't limit your experience"
        />
        <div className='space-y-4'>
            {data.map((element) => (
                <Card prop1={element.imgUrl}  prop2={element.desc} />
            ))}
        </div>

        <div className= 'py-[40px]'>
            <Continue page = "/p3"/>
        </div>
    </>
  )
}

export default Page2
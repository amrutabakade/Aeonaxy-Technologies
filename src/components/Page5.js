import React from 'react'
import Page35 from './Page35'
import Continue from './Continue'
import Progressbar from './Progressbar'
function Page5() {

  var s = "Through its engaging and well-structured courses, Brillent has tought me mathmatical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations"
  return (
    <>
        <Progressbar percentage={100}/>
        <Page35 
         img = "https://th.bing.com/th/id/OIP.LKFDyCJb8TGGDwWWNJigGQHaHa?w=152&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         title="You're on your way !" 
         desc = {s}/>

        <Continue page="/p6"/>
    </>
  )
}

export default Page5
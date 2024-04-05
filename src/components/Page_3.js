import React from 'react';
import Page35 from './Page35';
import Continue from './Continue';
import Progressbar from './Progressbar';

function Page_3() {
  var s = "Through its engaging and well-structured courses Brillient has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving skills.";
  
  return (
    <>
      <Progressbar percentage={60}/>
      <div className="md:flex md:flex-col md:items-center">
        <Page35 
          img="https://th.bing.com/th/id/OIP.pwBD6gGC1maOeDvcCoTvLAHaEc?w=310&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          title="You are in the right place"
          desc={s}
        />
        <Continue page="/p4"/>
      </div>
    </>
  );
}

export default Page_3;

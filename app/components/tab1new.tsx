import { useState } from "react";

export default function Tab1new() {
const [activetab,setActivetab]=useState(0)
const tabsvalue=["tab1","tab2","tab3"];
const contents=["Content0",
"Content 1",
"Content 2"

]

    return (
      <>
      <div className="mt-5">
        <ol>
        
        <div className="bg-orange-300 hover:bg-orange-600 flex gap-4 justify-center items-center ">
{tabsvalue.map(((tab,i)=><button key={`tab ${i}`} className={`px-4 border ${activetab===i ? "bg-blue-800":"bg-blue-200"}py-3 hover:bg-blue-500`}>{tab}</button>))}
          
        </div>
        </ol>

        <div className="flex flex-col mx-auto">
          {
            contents && contents.map((content,i)=>
              <div key={`content ${i}`}>Content</div>
            )}
<div>content</div>
<div>content</div>
<div>content</div>
<div>content</div>

        </div>
        </div>
</>



    
  
         
        
    );
  }
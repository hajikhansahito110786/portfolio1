import { useState } from "react";
import Education from "./education";
import Skills from "./skills";
import Project from "./project";

export default function Tab1new() {
const [activetab,setActivetab]=useState(0)
const tabsvalue=["Education","Skill","Project"];

//const contents=["Content 1",
const contents=[<Education key="1"/>,
<Skills key="2"/>,
<Project key="3"/>

]

    return (
      <>
      <div className="mt-5">
        <ol>
        
        <div className="bg-orange-300 hover:bg-orange-600 flex  justify-evenly items-center ">
{tabsvalue.map(((tab,i)=><button 
onClick={()=> setActivetab(i)}   
key={`tab ${i}`} 
className={`px-4 flex-1 border ${activetab===i ? "bg-blue-800 text-white":"bg-blue-200"} py-3 hover:bg-blue-500`}>
  {tab}</button>))}
       
        </div>
        </ol>

        <div className="flex flex-col mx-auto">
          {
            contents && contents.map((content,i)=>{
              if(activetab===i){
              return <div className="px-4 py-4 border h-60" key={`content ${i}`}>{content}</div>
              }
              return null
            }
            )}


        </div>
        </div>
</>



    
  
         
        
    );
  }
"use client";
import Detail from "./detail";
import {ButtonDemo} from "./mycomponents/mycard";

import Sidebar from "./sidebar";


export default function Startup() {
    return (
        <div className="flex overflow-hidden h-screen" >
<div className="bg-blue-200 ">
  
    <div className="bg-red-100 w-1/15">
    <Sidebar/>


    </div>
    
     
    
      </div>
      <div className="bg-red-200 w-1/15">@@  </div>
      <div className="bbg-red-400  w-full">
      <Detail/>
    
      </div>
      <div>
    <ButtonDemo/>


    </div>
      </div>
    );
  }
  
"use client"
//import "aos/dist/aos/aos.css"
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"
import Sidebar from "./sidebar";
import Detail from "./detail";



export default function Startup() {

    return (
      <div className="flex overflow-hidden h-screen" >
       

        <div className="bg-slate-400 w-1/5">
           {/*sidebars    */}

<Sidebar/>



        </div>
        <div className="bg-red-200 w-1/15">@@  </div>
            
            <div className="bg-lime-200 w-full">
              {/*details    */}
            
             <Detail/>
              
            
             
            </div>
  
          </div>
        
    );
  }
  
import Image from "next/image"
import img from "./butterfly1.jpg"

export default function Sidebar() {
 
      return (
        <div className="bg-red-100  h-screen flex flex-col items-center p-3">
           <p>
           sidebar
            </p>
         {/*image*/}
         <Image src={img} alt="profile" width={100} height={100} className="roundded-md" />
         <div className="mt-4">

        
          {/*name*/}
          <h1 className="text-xl font-semibold tracking-tight uppercase">
          haji khan
            </h1>
            <h1 className="text-xl font-semibold tracking-tight ">
          web developer
            </h1>
            </div>
           {/*social mediaimage*/}
            {/*cv button */}
          
        </div>
      );
    }
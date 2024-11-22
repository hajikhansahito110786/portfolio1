import Image from "next/image"
import img from "./butterfly1.jpg"

export default function Sidebar() {
  Image
      return (
        <div className="h-screen flex flex-col items-center p-3">
           <p>
           sidebar
            </p>
         {/*image*/}
         <Image src={img} alt="profile" width={1000} height={1000} className="roundded-md" />
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
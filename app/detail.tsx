
import Tab1new from "./components/tab1new";

export default function Detail() {
  
      return (

        <div>
         <p>
         detail

         </p>
         <div>

          <Tab1new/>
         </div>
           
         <div role="tablist" className="tabs w-full p-5 bg-red-300" >
  <a role="tab" className="tab"  >Tab 1

  

  </a>
  <a role="tab" className="tab tab-active">Tab 2</a>
  <a role="tab" className="tab">Tab 3</a>
</div>





<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
        </div>
      );
    }
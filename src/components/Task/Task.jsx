import React from 'react';

const Task = ({task,removeHandle}) => {
   
    
    return (
       <div>
        {
            task.map(cart=><div className="card w-full bg-base-100 card-md shadow-sm mb-3">            
                 <div className="card-body">
                   <h2 className="card-title font-bold mb-3">{cart.title}</h2>
                     <button onClick={()=>removeHandle(cart)} className="btn bg-[#02a53b] text-white">Complete</button>
                 </div>
             </div> )
        }
       </div>
    );
};

export default Task;



//  <div className="card w-96 bg-base-100 card-md shadow-sm">            
//                 <div className="card-body">
//                   <h2 className="card-title">{task.title}</h2>
//                     <button className="btn btn-primary">Complete</button>
//                 </div>
//             </div> 
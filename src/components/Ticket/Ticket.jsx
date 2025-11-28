import React from 'react';

const Ticket = ({ticket,handleClick}) => {
    
  
    const priorityClasses = 
        ticket.priority === 'Critical' ? 'text-orange-700' :
        ticket.priority === 'High' ? ' text-red-900' :
        ticket.priority === 'Medium' ? 'text-yellow-900 ' :
        ticket.priority === 'Low' ? 'text-green-900 ' :
        'text-gray-500'; 
       
        const status=
        ticket.status === 'Open' ? 'bg-[#02a53b] ' :
        ticket.status === 'Closed' ? 'bg-red-700' :
        ticket.status === 'In-Progress'? 'bg-yellow-600':
        
        'bg-green-400'
        

       
    
    

    return (
        <div>
              <div onClick={()=>handleClick(ticket)} className="card w-100% bg-base-100 card-xs shadow-sm flex justify-bewteen p-3 ">
          <div className='flex justify-between'>
            <h2 className='font-bold'>{ticket.title}</h2>
            <button className={`${status} rounded-2xl w-[88px] h-8 text-gray-200`}>
                  {ticket.status}
            </button>
          </div>
           <p className='text-gray-600'>{ticket.description}</p>
             
             <div className='flex justify-between mt-3'>

              <div className='space-x-2'>
              <span className='text-gray-400 '>{ticket.id}</span>
              <span

              
              className={`${priorityClasses} font-bold`}>{ticket.priority} priority</span>
             </div>
             <div className='space-x-2'>
               <span className='text-gray-400'>{ticket.customer}</span>
               <span className='text-gray-400'> {ticket.createdAt}</span>   

             </div>

             </div>

        </div>
        </div>
    );
};

export default Ticket;
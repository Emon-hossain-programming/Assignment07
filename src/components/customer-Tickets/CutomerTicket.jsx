import React, { use} from 'react';
import Ticket from '../Ticket/Ticket';
import Task from '../Task/Task';
import Resolve from '../ResolveData/Resolve';


const CutomerTicket = ({ticketsPromise,handleClick,task,removeHandle,resolveData}) => {
    const tickets=use(ticketsPromise) 

    
    
    return (
        <div>
           
        <div className='grid md:grid-cols-12 grid-cols-1 mt-5 '>

            <div className='col-span-8  grid md:grid-cols-2 grid-cols-1 gap-3 mr-3 md:h-[850px]'>
                   {
                    tickets.map(ticket=><Ticket tickets={tickets} handleClick={handleClick} key={ticket.id} ticket={ticket}></Ticket>)
                   }
            </div>


            <div className='col-span-4  '>
                <div>
                    <h2 className='font-bold text-2xl border-b-2 border-green-700 mb-3'>Task Status</h2> 
                    <Task key={task.id} task={task} removeHandle={removeHandle} tickets={tickets}></Task> 
                    
                </div>
                <div>
                <h2 className='font-bold text-2xl border-b-2 border-green-700 mb-3 border-t-2'>Resolve Task</h2>
                <Resolve resolveData={resolveData}></Resolve>
                </div>
 

            </div>

        </div>
        </div>
    );
};

export default CutomerTicket;
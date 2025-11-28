
import './App.css'
import Banner from './components/banner/Banner'
import Nabver from './components/Nabver/Nabver'
import CutomerTicket from './components/customer-Tickets/cutomerTicket'
import { Suspense, useState } from 'react'


const fetchData= async ()=>{
    const res=await fetch("/ticket.json")
    return res.json()

}
const ticketsPromise=fetchData()



function App() {


 const [task,setTask]=useState([])
 const [resolveData,setResolveData]=useState([])
       
    const handleClick=(id1)=>{
      const newTask=[...task,id1]
      setTask(newTask) 
       
    }

    const removeHandle=(id)=>{
     const newRemoveData=[...resolveData,id]
     setResolveData(newRemoveData)

     const taskCard=task.filter(tas=>tas.id!==id.id)
     setTask(taskCard)
    

    
    }

 
  return (
    <>
      <div className='bg-[#e5e7eb] max-w-[1400px] mx-auto'>
         <Nabver></Nabver>
         <Banner resolveData={resolveData} task={task}></Banner>
        <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
           <CutomerTicket resolveData={resolveData} task={task} removeHandle={removeHandle} handleClick={handleClick} ticketsPromise={ticketsPromise}></CutomerTicket>
        </Suspense>

      </div>
    </>
  )
}

export default App

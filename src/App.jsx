
import './App.css'
import Banner from './components/banner/Banner'
import Nabver from './components/Nabver/Nabver'
import CutomerTicket from './components/customer-Tickets/cutomerTicket'
import { Suspense, useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/footer/Footer'




const fetchData= async ()=>{
    const res=await fetch("/ticket.json")
    return res.json()

}
const ticketsPromise=fetchData()



function App() {


 const [task,setTask]=useState([])
 const [resolveData,setResolveData]=useState([])

       
    const handleClick=(id1)=>{
      id1.time=new Date().toLocaleDateString()
      const newTask=[...task,id1]
      
       setTask(newTask) 
      

      toast.success('successfully added')

       
    }

    const removeHandle=(id)=>{
     const newRemoveData=[...resolveData,id]
     setResolveData(newRemoveData)

     const taskCard=task.filter(tas=>tas.id!==id.id)
     setTask(taskCard)

     toast.error('remove from Task Status')

    }

 
  return (
    <>
      <div className='bg-[#e5e7eb] max-w-[1400px] mx-auto'>
         <Nabver></Nabver>
         <Banner resolveData={resolveData} task={task}></Banner>
        <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
           <CutomerTicket

             resolveData={resolveData}
             task={task}
             removeHandle={removeHandle}
             handleClick={handleClick}
             ticketsPromise={ticketsPromise}>

               </CutomerTicket>
        </Suspense>

        <Footer></Footer>
        
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      </div>
    </>
  )
}

export default App

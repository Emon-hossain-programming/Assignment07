
import './App.css'
import Banner from './components/banner/Banner'
import Nabver from './components/Nabver/Nabver'
import CutomerTicket from './components/customer-Tickets/cutomerTicket'

function App() {
 

  return (
    <>
      <div className='bg-[#e5e7eb] max-w-[1400px] mx-auto'>
         <Nabver></Nabver>
         <Banner></Banner>
         <CutomerTicket></CutomerTicket>
      </div>
    </>
  )
}

export default App

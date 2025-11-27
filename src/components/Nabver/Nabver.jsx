import React from 'react';

const Nabver = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  
  <div className="navbar-end">
    <div className='space-x-8 text-xl'>
        <span>Home</span>
        <span>FAQ</span>
        <span>Changelog</span>
        <span>Blog</span>
        <span>Download</span>
        <span>Contact</span>
    </div>
    <a className="btn ml-1 bg-linear-to-r text-white
        
        from-[#632EE3] 
       
        to-[#9F62F2]">
            + <span className='ml-2 text-white'>New Ticket</span>
            </a>
  </div>
</div>
        </div>
    );
};

export default Nabver;
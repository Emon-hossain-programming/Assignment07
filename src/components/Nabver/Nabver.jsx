import React from 'react';

const Nabver = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <span>Home</span>
        <span>FAQ</span>
        <span>Changelog</span>
        <span>Blog</span>
        <span>Download</span>
        <span>Contact</span>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  
  <div className="navbar-end">

    <div className='space-x-8 text-xl  hidden md:block'>
        <span>Home</span>
        <span>FAQ</span>
        <span>Changelog</span>
        <span>Blog</span>
        <span>Download</span>
        <span>Contact</span> </div>

    <a className="btn ml-1 text-white
        bg-linear-to-r 
        
        from-[#632EE3] 
       
        to-[#9F62F2]">
            + <span className='ml-2 text-white'>New Ticket</span>
            </a>
  </div>
</div>
    );
};

export default Nabver;



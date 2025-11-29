
import React from 'react';

const Footer = () => {
    return (
        <div className='h-[200px] border-2 mt-4'>
            <footer className="footer sm:footer-horizontal bg-[#000000] text-white p-10">
  <nav>
    <h6 className="footer-title">CS — Ticket System</h6>
   <span>
    Lorem Ipsum is simply dummy text of the<br/>
     printing and typesetting industry. Lorem<br/>
      Ipsum has been the industry's standard<br/>
       dummy text ever since the 1500s, when an<br/>
        unknown printer took a galley of type and<br/>
         scrambled it to make a type specimen book.<br/>
   </span>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Information</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
   
    <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">support@cst.com</a>
  </nav>

          </footer>

        </div>
    );
};

export default Footer;
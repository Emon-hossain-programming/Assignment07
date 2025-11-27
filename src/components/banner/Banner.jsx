import React from 'react';
import backgroundIMG from '../../assets/vector1.png'
import backgroundImg2 from '../../assets/vector2.png'

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-15'>
            <div 

            style={{
                backgroundImage: `
              linear-gradient(to right, #632EE3, #9F62F2),
              url(${backgroundIMG}),    
              url(${backgroundImg2})   
          `,
          backgroundPosition: `
              center center,
              left center,    
              right center    
          `,
          backgroundRepeat: `
              no-repeat,
              no-repeat,
              no-repeat
          `,
          backgroundSize: `
              cover,
              auto 100%,    
              auto 100%
          `,
          backgroundBlendMode: 'soft-light', 
                
               
            }}
            className=' flex justify-center items-center h-[250px] w-full rounded-2xl '>
             <div>
                <p className='text-2xl text-white'>In-Progress</p>
                  <h2 className='text-center text-5xl font-bold text-white'>0</h2>
             </div>
            </div>
            <div

            style={{
               backgroundImage: `
              linear-gradient(to right,#54cf68, #00827a),
              url(${backgroundIMG}),    
              url(${backgroundImg2})   
          `,
          backgroundPosition: `
              center center,
              left center,    
              right center    
          `,
          backgroundRepeat: `
              no-repeat,
              no-repeat,
              no-repeat
          `,
          backgroundSize: `
              cover,
              auto 100%,    
              auto 100%
          `,
          backgroundBlendMode: 'soft-light',   
            }}
            className='2 h-[250px]  w-full rounded-2xl flex justify-center items-center'>
             <div>
                 <h2 className='text-2xl text-white'>Resolved</h2>
                 <h2 className='text-center text-5xl font-bold text-white'>0</h2>
             </div>
            </div>
            
        </div>
    );
};

export default Banner;
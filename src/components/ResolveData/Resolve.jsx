import React from 'react';

const Resolve = ({resolveData}) => {
    console.log(resolveData);
    
    return (
        <div>
           {
            resolveData.map(resolve=><h2 className='p-5 bg-[#e0e7ff] text-xl mb-2 rounded-xl h-full'>{resolve.title}</h2>)
           }
        </div>
    );
};

export default Resolve;
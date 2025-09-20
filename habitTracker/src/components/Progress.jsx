import React from 'react';

const Progress = ({ progress }) => {
  const Progress = Math.max(0, progress);

  return (
    <>
    
    <div className=" w-full h-4 bg-blue-100 border border-[#5C63F9] rounded-full hover:shadow-xl hover:scale-[1.02] transition-all duration-400 ease-in-out">
      
      <div
        className=" h-full bg-[#5C63F9] rounded-full flex items-center justify-between "
        style={{ width: `${Progress}%` }}
      >
        <h1 className="ml-4 text-amber-50 text-[15px] font-bold">{Progress} </h1>
      </div>
    </div>
    </>
  );
};

export default Progress;
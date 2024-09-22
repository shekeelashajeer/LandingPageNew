import React from 'react';

function Session1() {
  return (
    <div>
      <div className='w-full bg-[#F5F7FA] bg-cover flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 justify-evenly items-center h-auto md:h-[416px] p-6 md:p-0'>
        
        <div className='flex flex-col justify-start space-y-2 items-center md:items-start text-center md:text-left'>
          <div className='flex flex-col'>
            <h1 className='text-[32px] md:text-[44px] font-bold'>Lessons and insights</h1>
            <p className='text-[#4CAF4F] text-[32px] md:text-[44px] font-bold'>from 8 years</p>
          </div>
          <p className='text-xs opacity-50'>Where to grow your business as a photographer: site or social media?</p>
          <button type="button" className='w-[100px] h-[40px] md:w-[90px] md:h-[37px] px-4 py-2 border-2 bg-[#4CAF4F] text-white text-[11px] rounded-md'>
            Register
          </button>
        </div>
        
        <div className='w-full md:w-auto'>
          <img src="image/Illustration.png" alt="banner_image" className="w-full max-w-sm h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Session1;

import React from 'react';
import { Icon } from '@iconify/react';

function Session10() {
  return (
    <div className='bg-[#F5F7FA] mt-24 flex flex-col justify-center items-center py-8 px-4'>
      <h1 className='text-[#263238] text-[36px] md:text-[44px] text-center font-semibold leading-tight'>
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <button 
        type="button" 
        className='flex flex-row items-center justify-center gap-2 text-white mt-3 bg-[#4CAF4F] w-full max-w-[124px] h-[36px] rounded-sm'>
        <span className='text-[13px]'>Get a Demo</span>
        <Icon icon="ph:arrow-right-bold" width="1rem" height="1rem" />
      </button>
    </div>
  );
}

export default Session10;

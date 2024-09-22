import React from 'react';

function Session5() {
  return (
    <div className='mt-8 px-4'>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-4 h-auto md:h-[301px]'>
        
        <div className='w-full md:w-auto'>
          <img src="image/Frame.png" className='w-full max-w-xs md:max-w-[307px] h-auto md:h-[301px]' alt="" />
        </div>
        
        
        <div className='w-full md:w-[460px] h-auto md:h-[187px] space-y-4'>
          <h1 className='text-[20px] md:text-[25px] text-[#4D4D4D] text-center md:text-left font-bold'>
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className='text-[10px] md:text-[9px] text-[#717171] text-center md:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <div className='flex justify-center md:justify-start'>
            <button type="button" className='w-[100px] h-[40px] md:w-[90px] md:h-[37px] px-4 py-2 border-2 bg-[#4CAF4F] text-white text-[11px] rounded-md'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session5;

import React from 'react';

function Session6() {
  return (
    <div>
      <div className='h-auto bg-[#F5F7FA] flex flex-col md:flex-row justify-center items-center gap-6 mt-8 px-4'>
        {/* Text Section */}
        <div className='h-auto w-full md:w-[375px]'>
          <h1 className='text-[#4D4D4D] text-[22px] md:text-[25px] font-bold text-center md:text-left'>Helping a local</h1>
          <h1 className='text-[#4CAF4F] text-[22px] md:text-[25px] font-bold text-center md:text-left'>business reinvent itself</h1>
          <p className='text-[#18191F] text-[10px] md:text-[11px] text-center md:text-left'>We reached here with our hard work and dedication</p>
        </div>

        {/* Stats Section */}
        <div className='h-auto w-full md:w-[375px] space-y-6'>
          <div className='flex flex-col md:flex-row justify-around space-y-4 md:space-y-0'>
            {/* Members */}
            <div className='flex flex-row items-center space-x-2'>
              <div className='w-[33px] h-[33px]'><img src="image/a1.png" className='w-[32px] h-[21px]' alt="members" /></div>
              <div>
                <h1 className='font-bold text-[19px] text-[#4D4D4D]'>2,245,341</h1>
                <p className='text-[10px] md:text-[11px] text-[#717171]'>Members</p>
              </div>
            </div>

            {/* Clubs */}
            <div className='flex flex-row items-center space-x-2'>
              <div className='w-[33px] h-[33px]'><img src="image/a2.png" className='w-[22px] h-[20px]' alt="clubs" /></div>
              <div>
                <h1 className='font-bold text-[19px] text-[#4D4D4D]'>46,328</h1>
                <p className='text-[10px] md:text-[11px] text-[#717171]'>Clubs</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-around space-y-4 md:space-y-0'>
            
            <div className='flex flex-row items-center space-x-2'>
              <div className='w-[33px] h-[33px]'><img src="image/a3.png" className='w-[22px] h-[25px]' alt="event bookings" /></div>
              <div>
                <h1 className='font-bold text-[19px] text-[#4D4D4D]'>828,867</h1>
                <p className='text-[10px] md:text-[11px] text-[#717171]'>Event Bookings</p>
              </div>
            </div>

            
            <div className='flex flex-row items-center space-x-2'>
              <div className='w-[33px] h-[33px]'><img src="image/a4.png" className='w-[29px] h-[24px]' alt="payments" /></div>
              <div>
                <h1 className='font-bold text-[19px] text-[#4D4D4D]'>1,926,436</h1>
                <p className='text-[10px] md:text-[11px] text-[#717171]'>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session6;

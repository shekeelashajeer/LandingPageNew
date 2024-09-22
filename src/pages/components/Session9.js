import React from 'react';
import { Icon } from '@iconify/react';

function Session9() {
  return (
    <div className='mt-8 flex flex-col items-center'>
      <div className='w-full max-w-[772px] flex flex-col items-center text-center'>
        <h1 className='text-[25px] text-[#4D4D4D] font-bold'>Caring is the new marketing</h1>
        <p className='text-[11px] text-[#717171] w-full max-w-[437px] mt-2'>
          The Nextcent blog is the best place to read about the latest membership insights, trends and more. 
          See who's joining the community, read about how our community is increasing their membership income and lots more.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-6 mt-4'>
        {[
          {
            imgSrc: "image/1.png",
            title: "Creating Streamlined Safeguarding Processes with OneRen"
          },
          {
            imgSrc: "image/image 19.png",
            title: "What are your safeguarding responsibilities and how can you manage them?"
          },
          {
            imgSrc: "image/image 20.png",
            title: "Revamping the Membership Model with Triathlon Australia"
          }
        ].map((item, index) => (
          <div key={index} className='flex flex-col items-center relative'>
            <img src={item.imgSrc} alt="" className='rounded-md h-[200px] w-[223px] object-cover' />
            <div className='w-[223px] h-[123px] text-center bg-white absolute -bottom-6 rounded-md flex flex-col items-center p-4 shadow-lg'>
              <p className='text-[14px] text-[#717171] font-bold h-[45px] overflow-hidden'>
                {item.title}
              </p>
              <button type="button" className='flex flex-row items-center gap-2 text-[#4CAF4F] mt-3'>
                <span className='text-[13px] font-bold'>Read more</span>
                <Icon icon="ph:arrow-right-bold" width="1rem" height="1rem" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Session9;

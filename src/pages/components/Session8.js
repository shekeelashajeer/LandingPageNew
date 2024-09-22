import React from 'react';
import { Icon } from '@iconify/react';

function Session8() {
  const images = [
    { id: 1, url: "image/Logo.png", alt: "Logo" },
    { id: 2, url: "image/Logo (1).png", alt: "Logo 1" },
    { id: 3, url: "image/Logo (2).png", alt: "Logo 2" },
    { id: 4, url: "image/Logo (3).png", alt: "Logo 3" },
    { id: 5, url: "image/Logo (4).png", alt: "Logo 4" },
    { id: 6, url: "image/Logo (5).png", alt: "Logo 5" },
  ];

  return (
    <div className='mt-8 px-4'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 h-auto'>
        
        <div className='w-full md:w-[250px] h-auto'>
          <img src="image/black.png" className='w-full h-auto' alt="blackimg" />
        </div>

        
        <div className='w-full md:w-[520px] h-auto space-y-2'>
          <p className='text-[10px] md:text-[11px] text-[#171717]'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1 className='text-[12px] md:text-[13px] text-[#4CAF4F] font-bold'>Tim Smith</h1>
          <p className='text-[10px] md:text-[11px] text-[#89939E]'>British Dragon Boat Racing Association</p>
          
          <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <div className='flex flex-row gap-4 md:gap-6 overflow-x-auto md:overflow-visible'>
              {images.map((image) => (
                <img key={image.id} src={image.url} className='w-[33px] h-[33px]' alt={image.alt} />
              ))}
            </div>
            <button type="button" className='flex flex-row items-center gap-2 text-[#4CAF4F] mt-4 md:mt-0'>
              <span className='text-[12px] md:text-[13px] font-semibold'>Meet All Customers</span>
              <Icon icon="ph:arrow-right-bold" width="1rem" height="1rem" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session8;

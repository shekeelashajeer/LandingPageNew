import React from 'react';

function Session2() {
  const images = [
    { id: 1, url: "image/Logo.png", alt: "Logo" },
    { id: 2, url: "image/Logo (1).png", alt: "Logo 1" },
    { id: 3, url: "image/Logo (2).png", alt: "Logo 2" },
    { id: 4, url: "image/Logo (3).png", alt: "Logo 3" },
    { id: 5, url: "image/Logo (4).png", alt: "Logo 4" },
    { id: 6, url: "image/Logo (5).png", alt: "Logo 5" },
    { id: 7, url: "image/Logo (2).png", alt: "Logo 6" },
  ];

  return (
    <div className='mt-8 h-auto'>
      <div className='flex flex-col justify-center items-center'>
    
        <div className='flex flex-col space-y-1 text-center'>
          <h1 className='font-bold text-[#4D4D4D] text-[22px] md:text-[25px]'>Our Clients</h1>
          <p className='text-[10px] md:text-[11px] text-[#717171]'>
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        
        <div className='flex flex-wrap justify-center md:justify-between items-center w-full max-w-[801px] h-auto mt-5 space-x-4 md:space-x-0'>
          {images.map((image) => (
            <img key={image.id} src={image.url} className='w-[40px] h-[40px] md:w-[27px] md:h-[27px] mb-4 md:mb-0' alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Session2;

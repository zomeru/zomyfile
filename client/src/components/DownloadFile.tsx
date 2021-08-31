import React from 'react';
import Image from 'next/image';

const DownloadFile = ({ downloadPageLink }) => {
  return (
    <div className='p-1'>
      <h1 className='my-2 text-lg font-medium'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        quaerat?
      </h1>
      <div className='flex space-x-3 text-red-600 break-all '>
        <span className='text-blue-500 break-all'>{downloadPageLink}</span>
        <Image
          src='/images/copy.png'
          alt=''
          width={30}
          height={30}
          className='object-contain cursor-pointer'
          onClick={() => navigator.clipboard.writeText(downloadPageLink)}
        />
      </div>
    </div>
  );
};

export default DownloadFile;

import React from 'react';
import Image from 'next/image';

const DownloadFile = ({ downloadPageLink }) => {
  return (
    <div className='p-1'>
      <h1 className='my-2 text-lg font-medium'>Your download link is ready.</h1>
      <div className='flex space-x-3 text-red-600 break-all'>
        <span className='text-blue-500 break-all px-10 p-4'>
          <a href={downloadPageLink} target='_blank' rel='noreferrer noopener'>
            {downloadPageLink}
          </a>
        </span>
        <Image
          src='/images/copy.png'
          alt=''
          width={40}
          height={40}
          className='object-contain cursor-pointer'
          onClick={() => navigator.clipboard.writeText(downloadPageLink)}
        />
      </div>
    </div>
  );
};

export default DownloadFile;

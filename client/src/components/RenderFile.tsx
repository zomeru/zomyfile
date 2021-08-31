import React from 'react';
import Image from 'next/image';
import { IFile } from 'libs/types';
import { sizeInMB } from 'libs/sizeInMB';

interface RenderFileProps {
  file: IFile;
}

const RenderFile: React.FC<RenderFileProps> = ({
  file: { format, sizeInBytes, name },
}) => {
  return (
    <div className='flex items-center w-full p-4 my-2'>
      <Image src={`/images/${format}.png`} alt='' width={50} height={50} />
      <span className='mx-2'>{name}</span>
      <span className='ml-auto'>{sizeInMB(sizeInBytes)}</span>
    </div>
  );
};

export default RenderFile;

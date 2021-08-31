import React, { Dispatch, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

interface DropZoneProps {
  setFile: Dispatch<any>;
}

const DropZone: React.FC<DropZoneProps> = ({ setFile }) => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: 'image/jpeg, image/png, audio/mpeg',
    });

  return (
    <div className='w-full p-4'>
      <div
        className='w-full rounded-md cursor-pointer h-80 focus:outline-none'
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        <div
          className={`flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed border-yellow-light rounded-xl ${
            isDragReject && 'border-red-500'
          } ${isDragAccept && 'border-green-500'}`}
        >
          <Image src='/images/folder.png' alt='folder' width={50} height={50} />
          {isDragReject ? (
            <p>Sorry! We only accept jpeg, png, and mp3 files.</p>
          ) : (
            <>
              <p>Drag & drop files here.</p>
              <p className='mt-2 text-base text-gray-300'>
                Only jpeg, png, and mp3 files are supported.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZone;

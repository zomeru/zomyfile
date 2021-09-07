import RenderFile from '@components/RenderFile';
import axios from 'axios';
import { IFile } from 'libs/types';
import { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';

const index: NextPage<{ file: IFile }> = ({
  file: { format, name, sizeInBytes, id },
}) => {
  return (
    <div className='flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl w-96'>
      {!id ? (
        <span>File does not exist! Please check the url.</span>
      ) : (
        <>
          <Image
            src='/images/file-download.png'
            alt=''
            width={50}
            height={50}
          />
          <h1 className='text-xl'>Your file is ready to be downloaded.</h1>
          <RenderFile file={{ format, name, sizeInBytes }} />
          <button className='button'>Download</button>
        </>
      )}
    </div>
  );
};

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  let file;
  try {
    const { data } = await axios.get(`http://localhost:8000/api/files/${id}`);
    file = data;
  } catch (error) {
    console.log(error.message);
    file = {};
  }
  return {
    props: {
      file: file,
    },
  };
}

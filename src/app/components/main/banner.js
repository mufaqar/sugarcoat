import Link from 'next/link';
import React from 'react';

export default function Banner({ image, title, sub_title }) {
  return (
    <main
      className="w-full h-screen bg-[url('/images/11.png')] bg-no-repeat bg-cover bg-center border-b-[1px] border-gray-200"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-center text-white flex flex-col justify-end items-center h-screen px-4">
        {/* <h1 className=" text-4xl md:text-6xl font-kammerlander font-light sm:tracking-[3vh] tracking-[5px] ">
          {title}
        </h1> */}
        <div className='max-w-[464px]'>
          <img
            src='/images/logo.png'
            alt='logo'
            className='w-full' />
        </div>
        <p className="md:text-lg text-sm font-montserrat tracking-wider mt-1">
          {sub_title}
        </p>
        <Link
          href="#"
          className="md:text-lg text-xs px-5 font-montserrat mt-5 mb-10 py-2 text-black bg-white hover:bg-black hover:text-white"
        >
          BOOK AN APPOINTMENT
        </Link>
      </div>
    </main>
  );
}

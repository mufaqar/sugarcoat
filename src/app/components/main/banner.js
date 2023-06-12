"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Locations_data } from "../../../../public/locations";

export default function Banner({ image, title, sub_title }) {
  const [open, setOpen] = useState(false);
  return (
    <main
      className="w-full h-screen bg-[url('/images/11.png')] bg-no-repeat bg-cover bg-center border-b-[1px] border-gray-200"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-center text-white flex flex-col justify-end items-center h-screen px-4">
        {/* <h1 className=" text-4xl md:text-6xl font-kammerlander font-light sm:tracking-[3vh] tracking-[5px] ">
          {title}
        </h1> */}
        <div className="max-w-[464px]">
          <img src="/images/logo.png" alt="logo" className="w-full" />
        </div>
        <p className="md:text-lg text-sm font-montserrat tracking-wider mt-1">
          {sub_title}
        </p>
        <button
          className="relative mb-10 mt-5"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="md:text-lg text-xs px-5 font-montserrat py-2 text-black bg-white hover:bg-black hover:text-white">
            BOOK AN APPOINTMENT
          </span>
          {open && (
            <ul className="absolute bg-gray-50 w-full text-gray-500 font-light mt-1 font-montserrat">
              {
                Locations_data.map((item, idx)=>{
                  return <li key={idx} className={`py-1 border-b-[1px] hover:bg-black hover:text-white border-gray-200 ${idx === 0 && 'border-t-[1px]'}`}>{item?.name}</li>
                })
              }
            </ul>
          )}
        </button>
      </div>
    </main>
  );
}

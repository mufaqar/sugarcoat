"use client";

import Image from "next/image";
//import { Services } from '../../public/servises-data';
import React, { useState } from "react";
import Link from "next/link";
import { Locations_data } from "../../../../public/locations";

export default function Header() {
  const [OpenNav, setOpenNav] = useState(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const [open, setOpenLocation] = useState(false);
  const handleMenu =()=>{
    if(open){
      setOpenLocation(false)
      setOpenNav(!OpenNav)
    }else{
      setOpenNav(!OpenNav)
    }
  }



  return (
    <>
      <header className=" w-full">
        <figure
          className="bg-white/30 p-1 absolute right-4 top-4 rounded-full"
          onClick={handleMenu}
        >
          <Image
            src={OpenNav ? "/svg/x.svg" : "/svg/menu.svg"}
            alt="menu"
            width={100}
            height={100}
            className={OpenNav ? "w-12 h-12 p-1" : "w-12 h-12"}
          />
        </figure>
        {OpenNav && (
          <div className="absolute  w-full md:w-[380px] px-6 right-0 z-10  top-20">
            <nav className="flex flex-col bg-white/60 gap-4 font-semibold text-2xl p-6 rounded-2xl overflow-hidden">
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href={`${typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''}/#vision`}
              >
                About Us
              </Link>

              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href={`${typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''}/#locations`}
              >
                Locations
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href="/events"
              >
                Parties /Events
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href={`${origin}/#clients`}
              >
                Press
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href="/products"
              >
                Products
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href="https://squareup.com/gift/MLJMBMXBCCDA2/order"
                target="_blank"
              >
                Gift Cards
              </Link>

              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href="/employment"
              >
                Employment
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href="/contact"
              >
                Contact us
              </Link>
              <Link
                // onMouseEnter={() => setOpenLocation(true)}
                // onMouseLeave={() => setOpenLocation(false)}
                className=" hover:tracking-widest font-kammerlander transition-all duration-300 ease-in-out hover:text-green-700"
                href="#locations"
              >
                <span>Make Appointment</span>
             
              {open && (
                <div className="md:absolute md:-left-[26rem] top-[20rem]">
                <ul className="flex md:bg-gray-100 md:p-6 m-6 md:rounded-2xl flex-col gap-4 font-boxley text-xl">
                {Locations_data.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="transition-all duration-300 ease-in-out hover:text-green-700"
                      
                    >
                      <Link href={item?.link} target="_blank" onClick={() => {setOpenNav(!OpenNav);setOpenLocation(!open)}}>
                        {item?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
                </div>
              )}
              </Link>
            </nav>
          </div>
        )}
        
      </header>
    </>
  );
}

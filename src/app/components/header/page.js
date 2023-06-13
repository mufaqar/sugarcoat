'use client';

import Image from 'next/image';
//import { Services } from '../../public/servises-data';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [OpenNav, setOpenNav] = useState(false);
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  return (
    <>
      <header className=" w-full">
        <figure
          className="bg-white/30 p-1 absolute right-4 top-4 rounded-full"
          onClick={() => setOpenNav(!OpenNav)}
        >
          <Image
            src={OpenNav ? '/svg/x.svg' : '/svg/menu.svg'}
            alt="menu"
            width={100}
            height={100}
            className={OpenNav ? 'w-12 h-12 p-1' : 'w-12 h-12'}
          />
        </figure>
        {OpenNav && (
          <div className="absolute  w-full md:w-[380px] px-6 right-0  top-20">
            <nav className="flex flex-col bg-white/60 gap-4 font-boxley text-xl p-6 rounded-2xl overflow-hidden">
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="/about"
              >
                About Us
              </Link>

              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="/locations"
              >
                Locations
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="/events"
              >
                Parties /Events
              </Link>

              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="/products"
              >
                Products
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="https://squareup.com/gift/MLJMBMXBCCDA2/order"
              >
                GIFT CARDS
              </Link>

              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="/employment"
              >
                Employment
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="/#contact"
              >
                Contact us
              </Link>
              <Link
                onClick={() => setOpenNav(!OpenNav)}
                className="hover:tracking-widest transition-all duration-300 ease-in-out hover:text-green-700"
                href="https://go.booker.com/location/sugarcoatbuckhead/"
              >
                Make Appointment
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

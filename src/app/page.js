'use client';

import Image from 'next/image';
import { Services } from '../../public/servises-data';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from './components/header/page';
import Footer from './components/footer/page';
import ServiceBox from './components/service-box/service';
import Banner from './components/main/banner';
import Call_To_Action from './components/cta/call-to-action';

export default function Home() {
  const [OpenNav, setOpenNav] = useState(false);
  return (
    <>
      <Header />
      <Banner
        image="/images/11.png"
        title="SUGARCOAT"
        sub_title="WE MAKE LIFE SWEETER"
      />

      <section className="px-4 mt-40 " id="vision">
        <div className="flex items-center flex-col md:flex-row px-6 md:px-20 border md:py-28 py-12 gap-4 md:gap-32 border-black mx-auto container">
          <h2 className="font-kammerlander text-4xl font-light md:max-w-[400px] w-full">
            OUR VISION
          </h2>
          <p className="font-boxley">
            Our vision is to create the ultimate beauty destination. A one stop
            shop for nails, lashes, hair care, and all things beauty. Sugarcoat
            Beauty is modern, elegant, and pristine. We aim to provide the most
            luxurious beauty experience.
          </p>
        </div>
      </section>

      <section id="services">
        <div className="mt-40 container mx-auto"  >
          <h2 className="font-kammerlander text-4xl font-light text-center">OUR SERVICE</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 px-10 mt-20 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {Services.map((post, idx) => {
            return (
              <ServiceBox post={post} key={idx} />
            );
          })}
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-5 px-10 mt-40 container mx-auto">
        <div className="py-5 lg:max-w-[35%] w-full">
          <div className="w-full p-4 border h-full border-black sm:p-6 md:p-8 flex flex-col justify-center items-center">
            <div className="text-4xl font-light text-center">
              <h2 className="font-kammerlander">
                SUGARCOAT <br /> NAIL POLISHES
              </h2>
            </div>
            <div className="mt-20 flex flex-col justify-center gap-2 items-center text-center">
              <Image
                src="/svg/leaf.svg"
                alt="leaf"
                width={120}
                height={120}
                className="w-12 h-12 border border-black rounded-full p-2"
              />
              <h3 className="font-boxley text-sm">ORGANIC</h3>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-2 items-center text-center">
              <Image
                src="/svg/wave.svg"
                alt="leaf"
                width={120}
                height={120}
                className="w-12 h-12 border border-black rounded-full p-2"
              />
              <h3 className="font-boxley text-sm">NON-TOXIC</h3>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-2 items-center text-center">
              <Image
                src="/svg/eco.svg"
                alt="leaf"
                width={120}
                height={120}
                className="w-12 h-12 border border-black rounded-full p-2"
              />
              <h3 className="font-boxley text-sm">ECO-FRIENDLY</h3>
            </div>
          </div>
        </div>
        <div className="w-full h-full max-h-[750px]">
          <img src="/images/nailpolish.png" alt="" className="w-full h-full" />
        </div>
      </section>

      <div className="mt-40  " id="testimonials">
        <h2 className="font-kammerlander text-4xl text-center">
          CLIENT <br /> TESTIMONIALS
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-20 px-10 max-sm:grid-cols-1 max-md:grid-cols-2 container mx-auto">
        <div className="mt-20 text-center ">
          <hr className="border-black" />
          <p className="mt-10 text-xs font-normal">
            "I LOVE GOING TO SUGARCOAT IN ATLANTA-THEIR MENU IS PERFECT. IF I'M
            ON THE GO, I'LL POP IN FOR A QUICK EXPRESS MANICURE. ON DAYS WHEN I
            HAVE TIME TO RELAX, I'LL PAMPER MYSELF WITH THEIR SIGNAGTURE
            MANI-PEDI, COMPLETE WITH THE SALON'S SUGARCOAT SUGAR SCRUB. PLUS, I
            LOVE THE PINK AND WHITE DECOR AT THE BUCKHEAD LOCATION. IT'S VERY
            GIRLIE AND REMINDS ME OF THE SPANX OFFICES! "
          </p>
          <h4 className="mt-10 text-xl font-bold font-kammerlander">
            SARA BLAKELY
            <br />
            FOUNDER OF SPANX <span className="text-red-500">❤</span>
          </h4>
        </div>
        <div className="mt-20 text-center">
          <hr className="border-black" />
          <p className="mt-10 text-xs font-normal">
            "BOOST YOUR PRODUCT AND SERVICE'S CREDIBILITY BY ADDING TESTIMONIALS
            FROM YOUR CLIENTS.
            <br />
            PEOPLE LOVE RECOMMENDATIONS SO FEEDBACK FROM OTHERS WHO'VE TRIED IT
            IS INVALUABLE."
          </p>
          <h4 className="mt-10 text-xl font-bold font-kammerlander">
            ERICA BOGART
            <br />
            AWARD WINNING MAKEUP ARTIST
          </h4>
        </div>
        <div className="mt-20 text-center">
          <hr className="border-black" />
          <p className="mt-10 text-xs font-normal">
            "BOOST YOUR PRODUCT AND SERVICE'S CREDIBILITY BY ADDING TESTIMONIALS
            FROM YOUR CLIENTS. FEEDBACK FROM OTHERS WHO'VE TRIED IT IS
            INVALUABLE. "
          </p>
          <h4 className="mt-10 text-xl font-bold font-kammerlander">
            BRENDA WOOD
            <br />
            NEWS ANCHOR
          </h4>
        </div>
      </div>

      <div className="w-full py-20 mt-20 bg-[#252427] px-4" id="about">
        <div className="pt-10 text-center text-white">
          <h5 className="font-semibold text-lg font-boxley">ABOUT THE BRAND</h5>
          <h2 className="my-7 font-light text-[38px] leading-[44px] md:text-[80px] md:leading-[93px] font-kammerlander">
            WE TAKE CARE OF <br /> OUR CLIENTS AND <br /> OUR PEOPLE.
          </h2>
          <p className="font-boxley md:text-lg text-xs font-light">
            WE LOVE SERVING OUR COMMUNITY, WE STRIVE TO PROVIDE THE BEST
            <br />
            PRODUCTS AND SERVICES TO CREATE THE ULTIMATE BEAUTY OASIS FOR ALL
            <br /> TO RELAX AND REJUVENATE
          </p>
        </div>
      </div>

      <div
        id="clients"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 container mx-auto px-10 my-20 logo"
      >
        <figure className="flex justify-center items-center">
          <img
            src="/images/Jezebel_Best_of Atlanta_2023_SugarcoatBeauty.jpg"
            alt=""
          />
        </figure>
        <figure className="flex justify-center items-center">
          <img
            src="/images/Atlantan_Best_The_City_Winner_SugarcoatBeauty.jpg"
            alt=""
          />
        </figure>
        <figure className="flex justify-center items-center">
          <img src="/images/Atlanta_Best_Of_ATL_SugarcoatBeauty.jpg" alt="" />
        </figure>
        <figure className="flex justify-center items-center">
          <img
            src="/images/Jezebel_Best_of_Atlanta_2021_Winner_SugarcoatBeauty.jpg"
            alt=""
          />
        </figure>
        <figure className="flex justify-center items-center">
          <img src="/images/Best_2018_Winner_SugarcoatBeauty.jpg" alt="" />
        </figure>
        <figure className="flex justify-center items-center">
          <img
            src="/images/Modern_Luxury_Weddings_2022_Exclusive_Mnmber_SugarcoatBeauty.jpg"
            alt=""
          />
        </figure>
        <figure className="flex justify-center items-center">
          <img
            src="/images/Best_of_Bestself_2021_Best_Nail_Salon_SugarcoatBeauty.jpg"
            alt=""
          />
        </figure>
        <figure className="flex justify-center items-center">
          <img src="/images/Best_of_Atlanta_SugarcoatBeauty.jpg" alt="" />
        </figure>
        <figure className="flex justify-center items-center">
          <img
            src="/images/Best_of_Bestself_2020_Best_Nail_Salon_SugarcoatBeauty.jpg"
            alt=""
          />
        </figure>
        <figure className="flex justify-center items-center">
          <img
            src="/images/Jezebel_Best_of Atlanta_2017_Best_Manis_and_Pedis_SugarcoatBeauty.jpg"
            alt=""
          />
        </figure>
      </div>
      <section id="contact">
      
      </section>
      <Footer />
    </>
  );
}

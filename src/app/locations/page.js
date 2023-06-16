"use client"

import { AllLocations } from '@/config/queries';
import { Locations_data } from '../../../public/locations';
import Footer from '../components/footer/page';
import Header from '../components/header/page';
import LocationBox from '../components/location-box/location';
import Banner from '../components/main/banner';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Locations() {

  const [allLocation, setAllLocations] = useState();

  useEffect(() => {
    axios
      .post("https://staging.sugarcoatbeauty.com/graphql", {
        query: AllLocations,
      })
      .then((response) => {
        setAllLocations(response.data.data.locations.nodes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Banner
        image="/images/locations.png"
        title="SUGARCOAT"
        sub_title="WE MAKE LIFE SWEETER"
      />
      <section id="services" className='mb-16'>
        <div className="mt-10 container mx-auto"  >
          <h2 className="font-kammerlander text-4xl font-light text-center">
            OUR LOCATIONS
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 px-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {allLocation?.map((post, idx) => {
            return (
              <LocationBox post={post} key={idx} />
            );
          })}
        </div>
      </section>
     
      <Footer />
    </>
  );
}

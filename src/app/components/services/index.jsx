import React, { useEffect, useState } from "react";
import ServiceBox from "../service-box/service";
import Link from "next/link";
import axios from "axios";
import { AllServices } from "@/config/queries";

export const metadata = {
  title: "SUGARCOAT",
  description: "SUGARCOAT",
};

const ServicesComponent = () => {
  const [allServices, setServices] = useState()

  useEffect(() => {
    axios
      .post("https://staging.sugarcoatbeauty.com/graphql", {
        query: AllServices,
      })
      .then((response) => {
        setServices(response.data.data.services.nodes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="services" className="px-4">
      <div className="md:mt-40 mt-20 container mx-auto">
        <h2 className="font-kammerlander text-4xl font-light text-center">
          OUR SERVICE
        </h2>
      </div>
      <div className="grid grid-cols-1 md:gap-y-20 gap-10 px-10 md:mt-20 mt-10 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {allServices?.map((post, idx) => {
          return <ServiceBox post={post} key={idx} />;
        })}
      </div>
      <div className="container mx-auto mt-10 text-center">
        <Link
          href="/locations"
          className="md:text-lg text-xs px-5 font-montserrat mt-5 mb-10 py-2 text-white bg-black hover:bg-white hover:text-black border-2 border-black"
        >
          Locations
        </Link>
      </div>
    </section>
  );
};

export default ServicesComponent;

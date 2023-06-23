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
    <section id="services" className="px-4 bg-[#f7f6f6] py-20 border-b-[1px] border-black">
      <div className=" container mx-auto">
        <h2 className="font-kammerlander text-4xl font-light text-center">
          OUR SERVICES
        </h2>
      </div>
      <div className="grid grid-cols-1 md:gap-y-32 gap-16 px-10 mt-20 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {allServices?.map((post, idx) => {
          return <ServiceBox post={post} key={idx} id={idx} />;
        })}
      </div>
      
    </section>
  );
};

export default ServicesComponent;

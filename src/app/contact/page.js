"use client"

import Footer from "../components/footer/page";
import Header from "../components/header/page";
import Banner from "../components/main/banner";
import { useForm } from "react-hook-form"

export default function Events() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }




  return (
    <>
      <Header />
      <Banner
        image="/images/11.png"
        title="SUGARCOAT"
        sub_title="WE MAKE LIFE SWEETER"
      />
      <section className="px-4 my-20 max-w-[900px] mx-auto" id="vision">
        <h2 className="font-kammerlander text-4xl font-light md:max-w-[400px] w-full">
        Contact Us
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              for="default-input"
              className="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              id="default-input"
              {...register("name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              className="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="email"
              id="default-input"
              {...register("email", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              className="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="default-input"
              {...register("number", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              className="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Appointment Location
            </label>
            <select
              id="countries"
              {...register("appointment_location", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option selected>Vinings</option>
              <option value="US">Buckhead</option>
              <option value="US">Virginia Highland</option>
            </select>

            <label
              for="default-input"
              className="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="default-input"
              {...register("Subject", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />

            <label
              for="message"
              className="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              {...register("message", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white active:scale-110 focus:outline-none bg-black rounded-lg border border-gray-200"
          />
        </form>
      </section>
      <Footer />
    </>
  );
}

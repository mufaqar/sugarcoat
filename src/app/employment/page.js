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
    console.log(data)
    // fetch('/api/sendmail', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
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
        Employment Inquiry

        </h2>
        <p className="font-montserrat text-lg mt-4">
        We are always looking for positive, energetic, hard working licensed technicians who are passionate about the beauty industry to join our team.
        <br/>Please contact us below for employment opportunities.        
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-6">
            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
             Your Name
            </label>
            <input
              type="text"
              id="default-input"
              {...register("name", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
            Your Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
            Phone Number
            </label>
            <input
              type="number"
              id="default-input"
              {...register("number", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
            Subject
            </label>
            <input
              type="text"
              id="default-input"
              {...register("subject", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />

            <label for="message" class="block mt-5 mb-2 text-sm font-medium text-gray-900">Message</label>
            <textarea id="message"  {...register("message", { required: true })} rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Write your thoughts here..."></textarea>


            <label class="block mt-5 mb-2 text-sm font-medium text-gray-900" for="file_input">Attach Resume            </label>
            <input  {...register("file", { required: true })} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" id="file_input" type="file"/>
          </div>
          <input type="submit" value="Submit" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white active:scale-110 focus:outline-none bg-black rounded-lg border border-gray-200"/>
        </form>
      </section>
      <Footer />
    </>
  );
}

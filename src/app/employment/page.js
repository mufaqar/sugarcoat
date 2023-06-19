"use client";

import { useState } from "react";
import Footer from "../components/footer/page";
import Header from "../components/header/page";
import Banner from "../components/main/banner";
import { useForm } from "react-hook-form";

export default function Events() {
  const [btnLoader, setBtnLoader] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBtnLoader(true);
    console.log(data);
    fetch("/api/sendmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        reset();
        setBtnLoader(false);
        alert("Email Successfully send.!");
      }
    });
  };

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
          We are always looking for positive, energetic, hard working licensed
          technicians who are passionate about the beauty industry to join our
          team.
          <br />
          Please contact us below for employment opportunities.
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

            <label
              for="message"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              rows="4"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Write your thoughts here..."
            ></textarea>

            <label
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
              for="file_input"
            >
              Attach Resume{" "}
            </label>
            <input
              {...register("file")}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              id="file_input"
              type="file"
            />
          </div>

          {btnLoader ? (
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <input
              type="submit"
              value="Submit"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white active:scale-110 focus:outline-none bg-black rounded-lg border border-gray-200"
            />
          )}
        </form>
      </section>
      <Footer />
    </>
  );
}

import React from 'react'

export default function Banner({image, title, sub_title}) {
    return (
        <main className="w-full h-screen bg-[url('/images/11.png')] bg-no-repeat bg-cover bg-center border-b-[1px] border-gray-200"
        style={{ backgroundImage: `url(${image})` }}>
            <div className="text-center text-white flex flex-col justify-end items-center h-screen px-4">
                <h1 className=" text-4xl md:text-6xl font-kammerlander font-light sm:tracking-[3vh] tracking-[5px] pb-3 ">
                    {title}
                </h1>
                <p className="mb-2 font-light md:text-xl font-boxley md:tracking-[6px]">
                    {sub_title}
                </p>
                <a
                    href="#"
                    className="md:text-lg text-[10px] px-6 font-boxley mb-9 py-2 text-black bg-white hover:bg-black hover:text-white"
                >
                    BOOK AN APPOINTENT
                </a>
            </div>
        </main>
    )
}

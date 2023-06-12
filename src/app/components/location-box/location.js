import Link from 'next/link'
import React from 'react'

export default function LocationBox({ post }) {
    return (
        <div className="w-full p-1 bg-white border border-black" >
            <div className='h-[262px]'>
                <img
                    src={post?.image}
                    alt={post?.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="my-5 text-center">
                <Link
                    href="#"
                    className="text-xs hidden px-2 font-montserrat uppercase py-1 font-extralight tracking-widest text-white bg-black hover:bg-white hover:text-black border-2 border-black"
                >
                    Make Appointment
                </Link>
                <h3 className="text-lg font-normal font-kammerlander mt-3">
                    {post?.name}
                </h3>
                <h5 className="font-montserrat font-light text-sm my-3">{post?.address}</h5>
                <Link href={`tel:${post.num}`} className="font-montserrat font-bold text-sm">
                    {post?.num}
                </Link>
            </div>
        </div>
    )
}

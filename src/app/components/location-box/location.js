import Link from 'next/link';
import React from 'react';

export default function LocationBox({ post }) {
  return (
    <div className="w-full p-2 bg-white border border-gray-600">
      <div className="h-[262px]">
        <img
          src={post?.featuredImage?.node?.mediaItemUrl}
          alt={post?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="my-5 text-center">
       
        <h3 className="text-xl text-gray-600 font-normal font-kammerlander mt-3">
          {post?.title}
        </h3>
        <div
          className="font-montserrat font-light text-sm my-3"
          dangerouslySetInnerHTML={{ __html: post?.content }}
        />

        <Link
          href={`tel:${post.locationFields?.mobileNumber}`}
          className="font-montserrat font-medium text-sm"
        >
          {post?.locationFields?.mobileNumber}
        </Link>
        
       <div>
       <Link
       href={post.locationFields?.appoinmentLink}
       target="_blank"
       className="text-xs  px-2 font-montserrat uppercase py-1 font-extralight tracking-widest text-black underline"
     >
       Make Appointment
     </Link>
       </div>
      </div>
    </div>
  );
}

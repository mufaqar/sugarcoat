import React from 'react';

export default function ServiceBox({ post, id }) {
  return (
    <div className="w-full p-3 bg-white border border-gray-600">
      <div className="border border-gray-600 overflow-hidden">
        <img
          src={post?.featuredImage?.node?.mediaItemUrl}
          alt={post?.name}
          className=" w-full h-full object-cover scale-[1.02]"
        />
      </div>
      <div className="mt-4 text-center">
        <h5 className="font-montserrat font-medium text-sm">{post?.title}</h5>
        <div className={`mt-3 text-3xl font-normal mb-4 font-kammerlander mx-auto text-gray-600 ${id != 4 && 'max-w-[230px]' }`}>
          {post?.servicesFields?.info}
        </div>
      </div>
    </div>
  );
}

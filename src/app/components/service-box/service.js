import React from 'react'

export default function ServiceBox({post}) {
    return (
        <div className="w-full p-5 bg-white border border-black" >
            <div className='border border-black overflow-hidden'>
                <img
                    src={post?.featuredImage?.node?.mediaItemUrl}
                    alt={post?.name}
                    className=" w-full h-full object-cover scale-[1.02]"
                />
            </div>
            <div className="mt-4 text-center">
                <h5 className="font-montserrat font-light text-sm">{post?.title}</h5>
                <div className="mt-5 text-3xl font-semibold font-kammerlander text-gray-600">{post?.servicesFields?.info}</div>
            </div>
        </div>
    );
}

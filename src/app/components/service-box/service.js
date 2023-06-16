import React from 'react'

export default function ServiceBox({post}) {
    return (
        <div className="w-full p-5 bg-white border border-black" >
            <div className=''>
                <img
                    src={post?.featuredImage?.node?.mediaItemUrl}
                    alt={post?.name}
                    className="border border-black w-full h-full object-cover"
                />
            </div>
            <div className="mt-4 text-center">
                <h5 className="font-montserrat font-light text-sm">{post?.title}</h5>
                <div className="mt-5 text-2xl font-semibold font-kammerlander" dangerouslySetInnerHTML={{__html: post?.servicesFields?.info}} />
            </div>
        </div>
    );
}

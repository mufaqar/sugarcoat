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
            <div className="mt-4 mb-5 text-center">
                <h3 className="text-lg font-light font-kammerlander">
                    {post?.name}
                </h3>
                <h5 className="font-boxley font-light text-sm my-3">{post?.address}</h5>
                <p className="font-boxley font-bold text-sm">
                    {post?.specs}
                </p>
            </div>
        </div>
    )
}

import React from 'react'

export default function ServiceBox({post}) {
    return (
        <div className="w-full p-5 bg-white border border-black" >
            <div className=''>
                <img
                    src={post?.image}
                    alt={post?.name}
                    className="border border-black w-full h-full object-cover"
                />
            </div>
            <div className="mt-4 text-center">
                <h5 className="font-boxley font-light text-sm">{post?.tag}</h5>
                <h3 className="mt-5 text-2xl font-semibold font-kammerlander">
                    {post?.name}
                </h3>
            </div>
        </div>
    );
}

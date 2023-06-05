import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Call_To_Action() {
    return (
        <div className="w-full px-4 py-20 bg-[url('/images/Contact-BG_Atlanta.jpg')] bg-no-repeat bg-cover"
        >
            <div className='flex justify-center flex-col items-end container mx-auto'>
                <div className="p-4 md:max-w-[440px] w-full bg-white m-auto md:mr-20">
                    <div className="border border-black p-4">
                        <div className="mt-10 text-center">
                            <h2 className="text-4xl font-kammerlander">CONTACT US</h2>
                            <div className='mt-9'>
                                <h3 className="font-bold font-boxley text-base">PHONE</h3>
                                <p className="font-boxley text-sm">(404)00080000</p>
                            </div>
                            <div className="mt-9">
                                <h3 className="font-bold font-boxley text-base">EMAIL</h3>
                                <Link href="mailto:hello@sugarcoatbeauty.com" className="font-boxley text-sm">
                                    HELLO@ SUGARCOATBEAUTY.COOM
                                </Link>
                            </div>
                            <div className="mt-9">
                                <h3 className="font-bold font-boxley text-base">SOCIAL</h3>
                                <div className="mt-2 text-sm flex justify-center item gap-3">
                                    <Image
                                        src="/svg/faceboook.svg"
                                        alt="facebook"
                                        width={120}
                                        height={120}
                                        className="w-6 h-6"
                                    />
                                    <Image
                                        src="/svg/twitter.svg"
                                        alt="twitter"
                                        width={120}
                                        height={120}
                                        className="w-6 h-6"
                                    />
                                    <Image
                                        src="/svg/instagram.svg"
                                        alt="insta"
                                        width={120}
                                        height={120}
                                        className="w-6 h-6"
                                    />
                                </div>
                                <div className="mt-20">
                                    <p className="font-boxley md:text-base text-sm">
                                        OUR SALONS ARE FULLY ACCESSIBLE. PLEASE REACH OUT FOR
                                        FURTHER ACCOMMODATIONS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        {/* main section */}
        <main className="w-full h-screen bg-[url('/images/11.png')] bg-no-repeat bg-cover bg-center border-b-[1px] border-gray-200">
          <div className="text-center text-white flex flex-col justify-end items-center h-screen px-4">
            <h1 className=" text-4xl md:text-6xl font-kammerlander font-light sm:tracking-[3vh] tracking-[16px] pb-3 ">
              SUGARCOAT
            </h1>
            <p className="mb-4 font-light md:text-xl font-boxley tracking-[6px]">WE MAKE LIFE SWEETER</p>
            <a href="#" className="px-10 font-boxley mb-[1px] py-3 text-black bg-white ">
              BOOK AN APPOINTENT
            </a>
          </div>
        </main>

        <section className="px-4 mt-40 ">
          <div className="flex items-center flex-col md:flex-row px-12 md:px-20 border py-28 gap-12 md:gap-32 border-black mx-auto container">
            <h2 className="font-kammerlander text-5xl font-light md:max-w-[400px] w-full">OUR VISION</h2>
            <p className="font-boxley">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              placeat, ab sit quidem quod perferendis perspiciatis, at eos,
              qui maiores aspernatur asperiores natus tenetur? Inventore fugit
              magnam quisquam quia deserunt? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Odio,
            </p>
          </div>
        </section>

        <div className="mt-40 text-5xl font-light text-center container mx-auto">
          <h2 className="font-kammerlander">OUR SERVICE</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 px-10 mt-20 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item, idx) => {
            return (
              <div
                className="w-full p-5 bg-white border border-black"
                key={idx}
              >
                <div>
                  <img
                    src="/images/eye.png"
                    alt=""
                    className="border border-black"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h5 className="font-boxley font-light text-2xl">NAIL CARE</h5>
                  <h3 className="mt-5 text-2xl lg:text-4xl font-semibold font-kammerlander">
                    MANICURES + PEDICURES
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <section className="flex flex-col md:flex-row gap-5 px-10 mt-40 container mx-auto">
          <div className="py-5 lg:max-w-[35%] w-full">
          <div className="w-full p-4 border h-full border-black sm:p-6 md:p-8 flex flex-col justify-center items-center">
            <div className="text-4xl font-light text-center max-sm:text-lg">
              <h2 className="font-kammerlander">
                SUGARCOAT <br /> NAIL POLISHES
              </h2>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-2 items-center text-center">
              <Image src="/svg/leaf.svg" alt="leaf" width={120} height={120} className="w-12 h-12 border border-black rounded-full p-2"/>
              <h3 className="font-boxley ">ORGANIC</h3>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-2 items-center text-center">
              <Image src="/svg/wave.svg" alt="leaf" width={120} height={120} className="w-12 h-12 border border-black rounded-full p-2"/>
              <h3 className="font-boxley ">NON-TOXIC</h3>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-2 items-center text-center">
              <Image src="/svg/eco.svg" alt="leaf" width={120} height={120} className="w-12 h-12 border border-black rounded-full p-2"/>
              <h3 className="font-boxley ">ECO-FRIENDLY</h3>
            </div>
          </div>
          </div>
          <div className="w-full h-full max-h-[750px]">
            <img src="/images/nailpolish.png" alt="" className="w-full h-full" />
          </div>
        </section>

        <div className="mt-40 text-5xl text-center ">
          <h2 className="font-kammerlander">
            CLIENT <br /> TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-20 px-10 max-sm:grid-cols-1 max-md:grid-cols-2 container mx-auto">
          <div className="mt-20 text-center ">
            <hr className="border-black" />
            <p className="mt-10">
              "I LOVE GOING TO SUGARCOAT IN ATLANTA-THEIR MENU IS PERFECT. IF
              I'M ON THE GO, I'LL POP IN FOR A QUICK EXPRESS MANICURE. ON DAYS
              WHEN I HAVE TIME TO RELAX, I'LL PAMPER MYSELF WITH THEIR
              SIGNAGTURE MANI-PEDI, COMPLETE WITH THE SALON'S SUGARCOAT SUGAR
              SCRUB. PLUS, I LOVE THE PINK AND WHITE DECOR AT THE BUCKHEAD
              LOCATION. IT'S VERY GIRLIE AND REMINDS ME OF THE SPANX OFFICES! "
            </p>
            <h4 className="mt-10 text-2xl font-kammerlander">
              SARA BLAKELY
              <br />
              FOUNDER OF SPANX ❤
            </h4>
          </div>
          <div className="mt-20 text-center">
            <hr className="border-black" />
            <p className="mt-10">
              "BOOST YOUR PRODUCT AND SERVICE'S CREDIBILITY BY ADDING
              TESTIMONIALS FROM YOUR CLIENTS.
              <br />
              <br />
              <br />
              PEOPLE LOVE RECOMMENDATIONS SO FEEDBACK FROM OTHERS WHO'VE TRIED
              IT IS INVALUABLE."
            </p>
            <h4 className="mt-10 text-2xl font-kammerlander">
              ERICA BOGART
              <br />
              AWARD WINNING MAKEUP ARTIST
            </h4>
          </div>
          <div className="mt-20 text-center">
            <hr className="border-black" />
            <p className="mt-10 font-boxley">
              "BOOST YOUR PRODUCT AND SERVICE'S CREDIBILITY BY ADDING
              TESTIMONIALS FROM YOUR CLIENTS. FEEDBACK FROM OTHERS WHO'VE TRIED
              IT IS INVALUABLE. "
            </p>
            <h4 className="mt-5 text-2xl font-kammerlander">
              BRENDA WOOD
              <br />
              NEWS ANCHOR
            </h4>
          </div>
        </div>

        <div className="w-full py-20 mt-20 bg-[#252427]">
          <div className="pt-10 text-center text-white">
            <h5 className="font-semibold font-boxley">ABOUT THE BRAND</h5>
            <h2 className="mt-20 font-light sm:text-3xl text-2xl md:text-6x xl:text-8xl font-kammerlander">
              WE TAKE CARE OF <br /> OUR CLIENTS AND <br /> OUR PEOPLE.
            </h2>
            <p className="mt-8 font-boxley">
              WE LOVE SERVING OUR COMMUNITY, WE STRIVE TO PROVIDE THE BEST
              <br />
              PRODUCTS AND SERVICES TO CREATE THE ULTIMATE BEAUTY OASIS FOR ALL
              <br /> TO RELAX AND REJUVENATE
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center flex-col px-4 items-end py-20 bg-[url('/images/Contact-BG_Atlanta.jpg')] bg-no-repeat bg-cover">
          <div className= "p-4 max-w-[440px] bg-white m-auto md:mr-20">
            <div className="border border-black p-6">
              <div className="mt-10 text-center">
                <h2 className="text-4xl font-kammerlander">CONTACT US</h2>
                <h5 className="mt-10 font-bold font-boxley text-lg">PHONE</h5>
                <p className="font-boxley text-sm">(404)00080000</p>
                <div className="mt-10">
                  <h3 className="font-bold font-boxley text-lg">EMAIL</h3>
                  <p className="font-boxley text-sm">HELLO@ SUGARCOATBEAUTY.COOM</p>
                  <h3 className="mt-10 font-bold font-boxley text-lg">SOCIAL</h3>
                  <div className="mt-2 text-xl flex justify-center item gap-3">
                  <Image src="/svg/faceboook.svg" alt="facebook" width={120} height={120} className="w-6 h-6"/>
                  <Image src="/svg/twitter.svg" alt="twitter" width={120} height={120} className="w-6 h-6"/>
                  <Image src="/svg/instagram.svg" alt="insta" width={120} height={120} className="w-6 h-6"/>
                  </div>
                  <div className="mt-20">
                    <p className="font-boxley">
                      OUR SALONS ARE FULLY ACCESSIBLE. PLEASE REACH OUT FOR
                      FURTHER ACCOMMODATIONS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 container mx-auto px-10 mt-20 logo">
          <figure className="flex justify-center items-center"><img src="/images/logo 1.jpeg" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo2.png" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo3.png" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo5.jpeg" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo6.jpeg" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo2.png" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo3.png" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo 1.jpeg" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo5.jpeg" alt="" /></figure>
          <figure className="flex justify-center items-center"><img src="/images/logo6.jpeg" alt="" /></figure>
        </div>

        <div className="w-full h-screen mt-20 bg-[url('/images/11.png')] bg-no-repeat bg-center bg-cover "/>
      </div>
    </>
  );
}

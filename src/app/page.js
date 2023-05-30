import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div class="container max-w-[1400px] mx-auto w-full">
        <div
          class="w-full h-screen"
          style="background-image:url(/image/11.png); background-repeat: no-repeat; background-size: cover; background-position: center;"
        >
          <div class="text-center text-white ">
            <h1 class="text-6xl max-sm:text-xl font-light sm:tracking-[3vh] tracking-[3vh]  pt-[75vh]   pb-4 ">
              SUGARCOAT
            </h1>
            <P class="mb-6 font-light ">WE MAKE LIFE SWEETER</P>
            <a href="#" class="px-10 py-3 text-black bg-white ">
              BOOK AN APPOINTENT
            </a>
          </div>
        </div>

        <div class="border-2 border-black mx-auto mt-40 py-20 max-w-[190vh] ">
          <div class="grid grid-cols-2 px-20 max-sm:grid-cols-1">
            <div class="mt-10 text-5xl font-light">
              <h2>OUR VISION</h2>
            </div>
            <div class="mt-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                placeat, ab sit quidem quod perferendis perspiciatis, at eos,
                qui maiores aspernatur asperiores natus tenetur? Inventore fugit
                magnam quisquam quia deserunt? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Odio,
              </p>
            </div>
          </div>
        </div>

        <div class="mt-40 text-5xl font-light text-center">
          <h2>OUR SERVICE</h2>
        </div>
        <div class="grid grid-cols-3 grid-rows-2 gap-10 px-10 mt-20 max-sm:grid-cols-1 max-md:grid-cols-2">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img src="/image/12.jfif" alt="" />
            </div>
            <div class="mt-4 text-center">
              <h5>NAIL CARE</h5>
              <h3 class="mt-5 text-2xl font-semibold">
                MANICURES + <br /> PEDICURES
              </h3>
            </div>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img src="/image/12.jfif" alt="" />
            </div>
            <div class="mt-4 text-center">
              <h5>NAIL CARE</h5>
              <h3 class="mt-5 text-2xl font-semibold">
                MANICURES + <br /> PEDICURES
              </h3>
            </div>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img src="/image/12.jfif" alt="" />
            </div>
            <div class="mt-4 text-center">
              <h5>NAIL CARE</h5>
              <h3 class="mt-5 text-2xl font-semibold">
                MANICURES + <br /> PEDICURES
              </h3>
            </div>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img src="/image/12.jfif" alt="" />
            </div>
            <div class="mt-4 text-center">
              <h5>NAIL CARE</h5>
              <h3 class="mt-5 text-2xl font-semibold">
                MANICURES + <br /> PEDICURES
              </h3>
            </div>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img src="/image/12.jfif" alt="" />
            </div>
            <div class="mt-4 text-center">
              <h5>NAIL CARE</h5>
              <h3 class="mt-5 text-2xl font-semibold">
                MANICURES + <br /> PEDICURES
              </h3>
            </div>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img src="/image/12.jfif" alt="" />
            </div>
            <div class="mt-4 text-center">
              <h5>NAIL CARE</h5>
              <h3 class="mt-5 text-2xl font-semibold">
                MANICURES + <br /> PEDICURES
              </h3>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-10 px-10 mt-40 max-sm:grid-cols-1">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <div class="text-4xl font-light text-center max-sm:text-lg">
              <h2>
                SUGARCOAT <br /> NAIL POLISHES
              </h2>
            </div>
            <div class="mt-10 text-center">
              <i class="fa-solid fa-leaf"></i>
              <h3>ORGANIC</h3>
            </div>
            <div class="mt-10 text-center">
              <i class="fa-solid fa-leaf"></i>
              <h3>ORGANIC</h3>
            </div>
            <div class="mt-10 text-center">
              <i class="fa-solid fa-leaf"></i>
              <h3>ORGANIC</h3>
            </div>
          </div>
          <div class="">
            <img src="/image/images (1).jpeg" alt="" class="w-full h-96" />
          </div>
        </div>

        <div class="mt-40 text-5xl text-center">
          <h2>
            CLIENT <br /> TESTIMONIALS
          </h2>
        </div>

        <div class="grid grid-cols-3 gap-20 px-10 max-sm:grid-cols-1 max-md:grid-cols-2">
          <div class="mt-20 text-center ">
            <hr class="border-black" />
            <p class="mt-10">
              "I LOVE GOING TO SUGARCOAT IN ATLANTA-THEIR MENU IS PERFECT. IF
              I'M ON THE GO, I'LL POP IN FOR A QUICK EXPRESS MANICURE. ON DAYS
              WHEN I HAVE TIME TO RELAX, I'LL PAMPER MYSELF WITH THEIR
              SIGNAGTURE MANI-PEDI, COMPLETE WITH THE SALON'S SUGARCOAT SUGAR
              SCRUB. PLUS, I LOVE THE PINK AND WHITE DECOR AT THE BUCKHEAD
              LOCATION. IT'S VERY GIRLIE AND REMINDS ME OF THE SPANX OFFICES! "
            </p>
            <h4 class="mt-10 text-2xl">
              SARA BLAKELY
              <br />
              FOUNDER OF SPANX ❤
            </h4>
          </div>
          <div class="mt-20 text-center">
            <hr class="border-black" />
            <p class="mt-10">
              "BOOST YOUR PRODUCT AND SERVICE'S CREDIBILITY BY ADDING
              TESTIMONIALS FROM YOUR CLIENTS.
              <br />
              <br />
              <br />
              PEOPLE LOVE RECOMMENDATIONS SO FEEDBACK FROM OTHERS WHO'VE TRIED
              IT IS INVALUABLE."
            </p>
            <h4 class="mt-10 text-2xl">
              ERICA BOGART
              <br />
              AWARD WINNING MAKEUP ARTIST
            </h4>
          </div>
          <div class="mt-20 text-center">
            <hr class="border-black" />
            <p class="mt-10">
              "BOOST YOUR PRODUCT AND SERVICE'S CREDIBILITY BY ADDING
              TESTIMONIALS FROM YOUR CLIENTS. FEEDBACK FROM OTHERS WHO'VE TRIED
              IT IS INVALUABLE. "
            </p>
            <h4 class="mt-5 text-2xl">
              BRENDA WOOD
              <br />
              NEWS ANCHOR
            </h4>
          </div>
        </div>

        <div class="w-full h-screen mt-20 bg-black">
          <div class="pt-10 text-center text-white">
            <h5 class="font-semibold">ABOUT THE BRAND</h5>
            <h2 class="mt-20 font-light max-sm:text-3xl text-8xl max-md:text-6xl max-xl:text-8xl">
              WE TAKE CARE OF <br /> OUR CLIENTS AND <br /> OUR PEOPLE.
            </h2>
            <p class="mt-8 ">
              WE LOVE SERVING OUR COMMUNITY, WE STRIVE TO PROVIDE THE BEST{' '}
              <br />
              PRODUCTS AND SERVICES TO CREATE THE ULTIMATE BEAUTY OASIS FOR ALL{' '}
              <br /> TO RELAX AND REJUVENATE
            </p>
          </div>
        </div>

        <div
          class="w-full h-screen"
          style="background-image: url(/image/pexels-pixabay-263209.jpg); background-repeat: no-repeat; background-size: cover;"
        >
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200  shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 pt-10 absolute mt-10 right-0 right-20 h-[90vh] max-sm:left-0 ">
            <div class="border-2 border-black h-[80vh]">
              <div class="mt-10 text-center">
                <h2 class="text-2xl">CONTACT US</h2>
                <h5 class="mt-10 font-bold">PHONE</h5>
                <p>(404)00080000</p>
                <div class="mt-10">
                  <h3 class="font-bold">EMAIL</h3>
                  <p>HELLO@ SUGARCOATBEAUTY.COOM</p>
                  <h3 class="mt-10 font-bold">SOCIAL</h3>
                  <div class="mt-2 text-xl ">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                  <div class="mt-20">
                    <p>
                      OUR SALONS ARE FULLY ACCESSIBLE. PLEASE REACH OUT FOR
                      FURTHER ACCOMMODATIONS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-5 grid-rows-2 gap-5 px-10 mt-20 logo max-sm:grid-cols-3 max-md:grid-cols-4">
          <img src="/image/logo 1.jpeg" alt="" />
          <img src="/image/logo2.png" alt="" />
          <img src="/image/logo3.png" alt="" />
          <img src="/image/logo5.jpeg" alt="" />
          <img src="/image/logo6.jpeg" alt="" />
          <img src="/image/logo2.png" alt="" />
          <img src="/image/logo3.png" alt="" />
          <img src="/image/logo 1.jpeg" alt="" />
          <img src="/image/logo5.jpeg" alt="" />
          <img src="/image/logo6.jpeg" alt="" />
        </div>

        <div
          class="w-full h-screen mt-32 "
          style=" background-image: url(/image/11.png); background-size: cover; background-position: center;"
        ></div>
      </div>
    </>
  );
}

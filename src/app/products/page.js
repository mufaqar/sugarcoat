import Link from "next/link";
import Footer from "../components/footer/page";
import Header from "../components/header/page";
import Banner from "../components/main/banner";





export default function Products() {
  // const [OpenNav, setOpenNav] = useState(false);
  return (
    <>
      <Header />
      <Banner
        image="/images/11.png"
        title="SUGARCOAT"
        sub_title="WE MAKE LIFE SWEETER"
      />
      <section className="px-4 my-20 " id="vision">
        <h2 className="font-kammerlander text-5xl text-center font-light w-full">
          Products
        </h2>
        <div
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-10 my-20 gap-5 logo"
      >
        {product?.map((item, idx) => {
          return (
            <Link href={item?.link} target="_blank" key={idx} className="flex justify-center items-center">
              <img
                src={item?.image}
                alt={`Product Image`}
                className="w-full h-full"
              />
            </Link>
          );
        })}
      </div>
      </section>
      <Footer />
    </>
  );
}

const product = [
  {
    image: '/images/opisss.jpeg',
    link: 'https://www.cnd.com/products/cnd-shellac'
  },
  {
    image: '/images/essiegel.jpeg',
    link: 'https://www.cakebeauty.com/'
  },
  {
    image: '/images/cnd.jpeg',
    link: 'https://gelish.com/'
  },
  {
    image: '/images/shellac-poster-04.2.jpg',
    link: 'https://www.cnd.com/products/cnd-shellac'
  },
  {
    image: '/images/ESSIE.jpeg',
    link: 'https://www.essie.com/'
  },
]
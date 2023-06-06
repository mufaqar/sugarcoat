import Footer from '../components/footer/page';
import Header from '../components/header/page';
import Banner from '../components/main/banner';

export default function About() {
  // const [OpenNav, setOpenNav] = useState(false);
  return (
    <>
      <Header />
      <Banner
        image="/images/11.png"
        title="SUGARCOAT"
        sub_title="WE MAKE LIFE SWEETER"
      />
      <section className="px-4 my-20 ">
        <div className="flex items-center flex-col md:flex-row px-6 md:px-28 border md:py-28 py-12 gap-4 md:gap-0 border-black mx-auto container">
          <h2 className="font-kammerlander text-4xl font-light md:max-w-[400px] w-full">
            OUR VISION
          </h2>
          <p className="font-boxley text-lg">
            Our vision is to create the ultimate beauty destination. A one stop
            shop for nails, lashes, hair care, and all things beauty. Sugarcoat
            Beauty is modern, elegant, and pristine. We aim to provide the most
            luxurious beauty experience.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

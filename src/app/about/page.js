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
      <section className="px-4 my-20 " id="vision">
        <div className="flex items-center flex-col md:flex-row px-12 md:px-20 border py-28 gap-12 md:gap-32 border-black mx-auto container">
          <h2 className="font-kammerlander text-5xl font-light md:max-w-[400px] w-full">
            OUR VISION
          </h2>
          <p className="font-boxley">
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

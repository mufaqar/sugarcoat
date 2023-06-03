import Footer from '../components/footer/page';
import Header from '../components/header/page';

export default function Events() {
  // const [OpenNav, setOpenNav] = useState(false);
  return (
    <>
      <Header />

      <section className="px-4 mt-40 " id="vision">
        <div className="flex items-center flex-col md:flex-row px-12 md:px-20 border py-28 gap-12 md:gap-32 border-black mx-auto container">
          <h2 className="font-kammerlander text-5xl font-light md:max-w-[400px] w-full">
            Events
          </h2>
          <p className="font-boxley">Event Page</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

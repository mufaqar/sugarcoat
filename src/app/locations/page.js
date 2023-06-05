import { Locations_data } from '../../../public/locations';
import { Services } from '../../../public/servises-data';
import Call_To_Action from '../components/cta/call-to-action';
import Footer from '../components/footer/page';
import Header from '../components/header/page';
import LocationBox from '../components/location-box/location';
import Banner from '../components/main/banner';
import ServiceBox from '../components/service-box/service';

export default function Locations() {
  return (
    <>
      <Header />
      <Banner
        image="/images/locations.png"
        title="SUGARCOAT"
        sub_title="WE MAKE LIFE SWEETER"
      />
      <section id="services">
        <div className="mt-10 container mx-auto"  >
          <h2 className="font-kammerlander text-4xl font-light text-center">
            OUR LOCATIONS
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 px-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {Locations_data.map((post, idx) => {
            return (
              <LocationBox post={post} key={idx} />
            );
          })}
        </div>
      </section>
      <section className='my-20'>
        <Call_To_Action />
      </section>
      <Footer />
    </>
  );
}

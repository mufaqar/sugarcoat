import Footer from '../components/footer/page';
import Header from '../components/header/page';
import Banner from '../components/main/banner';

export default function Events() {
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
        <div className="px-12 md:px-20 border py-28 gap-12 md:gap-32 border-black mx-auto container">
          <h2 className="text-4xl  font-kammerlander mb-5">Parties/Events </h2>
          <p className=" font-normal font-montserrat">
            You are having a party? How sweet! We would be honored to host your
            party and pamper you and your guests to the best manicure and
            pedicure in Atlanta.
          </p>
          <h3 className="text-2xl  font-kammerlander underline my-5">
            Sugarcoat Party Policy:
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Private Parties available for groups of 12 people or more; $150
              location fee for a private party.
            </li>
            <li>No additional fee for non-private parties.</li>
            <li>
              8mani-pedis can be performed at once. Duration time is
              approximately 1 hour and 15 minutes
            </li>
            <li>
              Minimum service requirement is $45 per person (essential mani-pedi
              combo).
            </li>
            <li>
              At any time within 48 hours prior to the event, if there are any
              cancellations and/or a no show, the credit card on file will be
              charged for the full service amount reserved per person
            </li>
            <li>
              Guests MUST arrive at least 15 minutes before their schedule
              appointment. If a guest arrives late, we will accommodate the
              guest as much as possible. Service may be shortened if needed or
              substituted.
            </li>
            <li>
              Parties can be scheduled anytime during business hours. After hour
              private parties are available upon request. You may bring your own
              food, wine, champagne for the party.
            </li>
            <li>
              A credit card number is required to hold all party reservations.
              The minimum service fee will be charged for late cancellations and
              no shows.
            </li>
            <li>
              20% gratuity is added to all services upon checkout. Please arrive
              at least 15 minutes prior to scheduled party time so that we may
              start on time.
            </li>
          </ul>
          <p className="mt-5 font-normal font-montserrat">
            We look forward to serving you and your guests!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

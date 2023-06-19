import Footer from "../components/footer/page";
import Header from "../components/header/page";
import Banner from "../components/main/banner";

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
      <section className="px-4 my-20 max-w-[900px] mx-auto" id="vision">
        <h2 className="font-kammerlander text-4xl font-light md:max-w-[400px] w-full">
        Contact Us
        </h2>
        
        <form>
          <div class="mb-6">
            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="email"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Appointment Location
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option selected>Vinings</option>
              <option value="US">Buckhead</option>
              <option value="US">Virginia Highland</option>
            </select>

            <label
              for="default-input"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />

            <label
              for="message"
              class="block mt-5 mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white active:scale-110 focus:outline-none bg-black rounded-lg border border-gray-200"
          />
        </form>
      </section>
      <Footer />
    </>
  );
}

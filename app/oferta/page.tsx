import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import Offer from "../components/Offer/Offer";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Reviews from '../components/Reviews/Reviews';
import { getOfferStrapiData } from '../utils/api';

export default async function OfferPage() {
  let {data} : any = await getOfferStrapiData('api/offer-page');

  return (
    <SmoothScroll>
      <EntranceOpacity />
      <main className={`${DMSans.className}`}>
        <Navigation />
        {data &&
          <>
            <div className="py-20 bg-[var(--dark)]">
              <div className='container mx-auto my-10 px-4'>
                <h2 className="text-[var(--white)] font-medium text-[2.6rem] md:text-[3.2rem] lg:max-w-[80%] xl:max-w-[70%]">Oferta pakietów ślubnych, pakiety można mieszać dowolnie.</h2>
              </div>
            </div>
            <Offer data={data.attributes.categories} />
            <Reviews data={data.attributes.testimonials}/>
            <Contact data={data.attributes.footer}/>
            <Footer />
          </>
        }
      </main>
    </SmoothScroll>
  )
}
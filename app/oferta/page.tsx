import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import Offer from "../components/Offer/Offer";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Reviews from '../components/Reviews/Reviews';
import { fetchData } from '../utils/cms';
import { offerQuery, testimonialsQuery, contactQuery } from '../utils/cmsQueries';

export default async function OfferPage() {
  const offerCMS = await fetchData(offerQuery);
  const testimonialsCMS = await fetchData(testimonialsQuery);
  const contactCMS = await fetchData(contactQuery);

  return (
    <SmoothScroll>
      <EntranceOpacity />
      <main className={`${DMSans.className}`}>
        <Navigation />
        <div className="my-32">
          <div className='container mx-auto px-4'>
            <h2 className="text-[var(--white)] font-medium text-[2.6rem] md:text-[3.2rem] lg:max-w-[80%] xl:max-w-[70%]">{offerCMS.data.offerCollection.items[0].description}</h2>
          </div>
        </div>
        <Offer offerCMS={offerCMS}/>
        <Reviews testimonialsCMS={testimonialsCMS} />
        <Contact contactCMS={contactCMS} />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
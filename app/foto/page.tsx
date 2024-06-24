import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import IndustryHero from '../components/IndustryHero/IndustryHero';
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
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
            <IndustryHero title="Fotografia" heroBackground="/offerBoxPhoto.jpg"/>
            <Contact data={data.attributes.footer}/>
            <Footer />
          </>
        }
      </main>
    </SmoothScroll>
  )
}
import SmoothScroll from './utils/SmoothScroll';
import { DMSans } from './fonts';
import EntranceOpacity from './components/EntranceOpacity/EntranceOpacity';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import OfferBoxes from './components/OfferBoxes/OfferBoxes';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { getHomeStrapiData } from './utils/api';

export default async function Home() {
  let {data} : any = await getHomeStrapiData('api/home-page');

  return (
    <SmoothScroll>
      <EntranceOpacity />
      <Loader />
      <main className={`${DMSans.className}`}>
        <Navigation />
        {data && 
          <>
            <Hero data={data.attributes.hero} />
            <About data={data.attributes.about} />
            <OfferBoxes />
            <Contact data={data.attributes.footer} />
            <Footer/>
          </>
        }
      </main>
    </SmoothScroll>
  );
}
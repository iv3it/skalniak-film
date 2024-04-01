import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import Offer from "../components/Offer/Offer";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Reviews from '../components/Reviews/Reviews';

export default function OfferPage() {
  return (
    <SmoothScroll>
      <EntranceOpacity />
      <main className={`${DMSans.className}`}>
        <Navigation />
        <Offer />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
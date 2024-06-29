import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import IndustryHero from '../components/IndustryHero/IndustryHero';
import PhotoContainer from '../components/PhotoContainer/PhotoContainer';
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { getPortfolioStrapiData } from '../utils/api';

export default async function FotoPage() {
  let {data} : any = await getPortfolioStrapiData('api/portfolio-page');

  return (
    <SmoothScroll>
      <EntranceOpacity />
      <main className={`${DMSans.className}`}>
        <Navigation />
        {data &&
          <>
            <IndustryHero title="Fotografia" heroBackground="/offerBoxPhoto.jpg"/>
            <PhotoContainer data={data.attributes.photo} />
            <Contact data={data.attributes.footer} />
            <Footer />
          </>
        }
      </main>
    </SmoothScroll>
  )
}
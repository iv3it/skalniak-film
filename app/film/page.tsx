import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import IndustryHero from '../components/IndustryHero/IndustryHero';
import VideoContainer from '../components/VideoContainer/VideoContainer';
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { getPortfolioStrapiData } from '../utils/api';

export default async function FilmPage() {
  let {data} : any = await getPortfolioStrapiData('api/portfolio-page');

  return (
    <SmoothScroll>
      <EntranceOpacity />
      <main className={`${DMSans.className}`}>
        <Navigation />
        {data &&
          <>
            <IndustryHero title="Film" heroBackground="/offerBoxVideo.jpg"/>
            <VideoContainer data={data.attributes.video}/>
            <Contact data={data.attributes.footer}/>
            <Footer />
          </>
        }
      </main>
    </SmoothScroll>
  )
}
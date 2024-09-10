import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import IndustryHero from '../components/IndustryHero/IndustryHero';
import VideoContainer from '../components/VideoContainer/VideoContainer';
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { fetchData } from '../utils/cms';
import { portfolioVideos, contactQuery } from '../utils/cmsQueries';

export default async function FilmPage() {
  try {
    const [portfolioVideosCMS, contactCMS] = await Promise.all([
      fetchData(portfolioVideos),
      fetchData(contactQuery),
    ]);

    return (
      <SmoothScroll>
        <EntranceOpacity />
        <main className={`${DMSans.className}`}>
          <Navigation />
          <IndustryHero industryHeroCMS={portfolioVideosCMS.data.portfolioVideosCollection} />
          <VideoContainer portfolioVideosCMS={portfolioVideosCMS}/>
          <Contact contactCMS={contactCMS}/>
          <Footer />
        </main>
      </SmoothScroll>
    );
  } catch (error : any) {
    return <p>{error}</p>
  }
}
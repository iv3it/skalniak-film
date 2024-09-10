import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import IndustryHero from '../components/IndustryHero/IndustryHero';
import PhotoContainer from '../components/PhotoContainer/PhotoContainer';
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { fetchData } from '../utils/cms';
import { portfolioPhotosQuery, contactQuery } from '../utils/cmsQueries';

export default async function FotoPage() {
  try {
    const [portfolioPhotosCMS, contactCMS] = await Promise.all([
      fetchData(portfolioPhotosQuery),
      fetchData(contactQuery),
    ]);

    return (
      <SmoothScroll>
        <EntranceOpacity />
        <main className={`${DMSans.className}`}>
          <Navigation />
          <IndustryHero industryHeroCMS={portfolioPhotosCMS.data.portfolioPhotosCollection} />
          <PhotoContainer portfolioPhotosCMS={portfolioPhotosCMS} />
          <Contact contactCMS={contactCMS} />
          <Footer />
        </main>
      </SmoothScroll>
    );
  } catch (error : any) {
    return <p>{error}</p>
  }
}
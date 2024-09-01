import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import IndustryHero from '../components/IndustryHero/IndustryHero';
import VideoContainer from '../components/VideoContainer/VideoContainer';
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { fetchData } from '../utils/cms';

export default async function FilmPage() {
  let contactQuery = `
    query {
      footerCollection {
        items {
          description
          descriptionShort
          socialMediaCollection {
            items {
              url
              text
              isExternal
            }
          }
          contactLinksCollection {
            items {
              url
              text
              isExternal
            }
          }
        }
      }
    }
  `;
  
  let portfolioVideos = `
    query {
      portfolioVideosCollection(limit: 1) {
        items {
          title
          description
          videoCollection(limit: 100) {
            items {
              title
              description
              video {
                url
              }
            }
          }
        }
      }
    }
  `;

  const contactCMS = await fetchData(contactQuery);
  const portfolioVideosCMS = await fetchData(portfolioVideos);

  return (
    <SmoothScroll>
      <EntranceOpacity />
      <main className={`${DMSans.className}`}>
        <Navigation />
        <IndustryHero industryHeroCMS={portfolioVideosCMS.data.portfolioVideosCollection} heroBackground="/offerBoxVideo.jpg"/>
        <VideoContainer portfolioVideosCMS={portfolioVideosCMS}/>
        <Contact contactCMS={contactCMS}/>
        <Footer />
      </main>
    </SmoothScroll>
  )
}
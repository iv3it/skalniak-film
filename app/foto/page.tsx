import { DMSans } from '../fonts';
import SmoothScroll from '../utils/SmoothScroll';
import EntranceOpacity from '../components/EntranceOpacity/EntranceOpacity';
import Navigation from "../components/Navigation/Navigation";
import IndustryHero from '../components/IndustryHero/IndustryHero';
import PhotoContainer from '../components/PhotoContainer/PhotoContainer';
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { fetchData } from '../utils/cms';

export default async function FotoPage() {
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

  let portfolioPhotos = `
    query {
      portfolioPhotosCollection(limit: 1) {
        items {
          title
          description
          heroBackground {
            url
          }
          photoCollection(limit: 100) {
            items {
              title
              url
              image {
                url
              }
            }
          }
        }
      }
    }
  `;

  const contactCMS = await fetchData(contactQuery);
  const portfolioPhotosCMS = await fetchData(portfolioPhotos);

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
  )
}
import SmoothScroll from './utils/SmoothScroll';
import EntranceOpacity from './components/EntranceOpacity/EntranceOpacity';
import ClientWrapper from './wrappers/ClientWrapper';
import { fetchData } from './utils/cms'

export default async function Home() {
  let heroQuery = `
    query {
      heroCollection {
        items {
          title
          subtitle
          heroBackground {
            url
          }
        }
      }
    }
  `;

  let aboutMeQuery = `
    query {
      aboutMeCollection {
        items {
          description
          button {
            url
            text
            isExternal
          }
        }
      }
    }
  `;

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

  const heroCMS = await fetchData(heroQuery);
  const aboutMeCMS = await fetchData(aboutMeQuery);
  const contactCMS = await fetchData(contactQuery);

  return (
    <SmoothScroll>
      <EntranceOpacity />
      <ClientWrapper heroCMS={heroCMS} aboutMeCMS={aboutMeCMS} contactCMS={contactCMS}/>
    </SmoothScroll>
  );
}
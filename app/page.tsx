import SmoothScroll from './utils/SmoothScroll';
import EntranceOpacity from './components/EntranceOpacity/EntranceOpacity';
import ClientWrapper from './wrappers/ClientWrapper';
import { fetchData } from './utils/cms'
import { heroQuery, aboutMeQuery, offerBoxesQuery, contactQuery } from './utils/cmsQueries';

export default async function Home() {
  const heroCMS = await fetchData(heroQuery);
  const aboutMeCMS = await fetchData(aboutMeQuery);
  const offerBoxesCMS = await fetchData(offerBoxesQuery);
  const contactCMS = await fetchData(contactQuery);
  
  return (
    <SmoothScroll>
      <EntranceOpacity />
      <ClientWrapper heroCMS={heroCMS} aboutMeCMS={aboutMeCMS} offerBoxesCMS={offerBoxesCMS} contactCMS={contactCMS}/>
    </SmoothScroll>
  );
}
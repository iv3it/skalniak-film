import SmoothScroll from './utils/SmoothScroll';
import EntranceOpacity from './components/EntranceOpacity/EntranceOpacity';
import ClientWrapper from './wrappers/ClientWrapper';
import { fetchData } from './utils/cms'
import { heroQuery, aboutMeQuery, offerBoxesQuery, contactQuery } from './utils/cmsQueries';

export default async function Home() {
  try {
    const [heroCMS, aboutMeCMS, offerBoxesCMS, contactCMS] = await Promise.all([
      fetchData(heroQuery),
      fetchData(aboutMeQuery),
      fetchData(offerBoxesQuery),
      fetchData(contactQuery)
    ]);

    return (
      <SmoothScroll>
        <EntranceOpacity />
        <ClientWrapper heroCMS={heroCMS} aboutMeCMS={aboutMeCMS} offerBoxesCMS={offerBoxesCMS} contactCMS={contactCMS}/>
      </SmoothScroll>
    );
  } catch (error : any) {
    return <p>{error}</p>
  }
}
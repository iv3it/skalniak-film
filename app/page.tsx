import SmoothScroll from './utils/SmoothScroll';
import EntranceOpacity from './components/EntranceOpacity/EntranceOpacity';
import { getHomeStrapiData } from './utils/api';
import ClientWrapper from './wrappers/ClientWrapper';

export default async function Home() {
  let {data} : any = await getHomeStrapiData('api/home-page');

  return (
    <SmoothScroll>
      <EntranceOpacity />
      <ClientWrapper data={data} />
    </SmoothScroll>
  );
}
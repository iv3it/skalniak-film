"use client"
import { useState } from 'react';
import { DMSans } from '../fonts';
import Loader from '../components/Loader/Loader';
import Navigation from '../components/Navigation/Navigation';
import Hero from "../components/Hero/Hero";
import About from '../components/About/About';
import OfferBoxes from '../components/OfferBoxes/OfferBoxes';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const ClientWrapper = ({ data } : any) => {
  let [isLoading, setIsLoading] : any = useState(true);

  let isLoaded = (loaded : boolean) => {
    setIsLoading(loaded);
  }

  return (
    <>
      <main className={`${DMSans.className}`}>
        {isLoading &&
          <Loader isLoading={isLoaded}/>
        }
        {!isLoading && data && 
          <>
            <Hero data={data.attributes.hero} />
            <Navigation />
            <About data={data.attributes.about} />
            <OfferBoxes />
            <Contact data={data.attributes.footer} />
            <Footer/>
          </>
        }
      </main>
    </>
  );
}

export default ClientWrapper;
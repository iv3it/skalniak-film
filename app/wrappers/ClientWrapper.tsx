"use client"
import { useEffect, useState } from 'react';
import { DMSans } from '../fonts';
import Loader from '../components/Loader/Loader';
import Navigation from '../components/Navigation/Navigation';
import Hero from "../components/Hero/Hero";
import About from '../components/About/About';
import OfferBoxes from '../components/OfferBoxes/OfferBoxes';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { DataCMS } from '@/types';

const ClientWrapper = ({ heroCMS, aboutMeCMS, offerBoxesCMS, contactCMS } : DataCMS) => {
  let [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <main className={`${DMSans.className}`}>
        {isLoading &&
          <Loader onLoadingComplete={() => setIsLoading(false)}/>
        }
        {!isLoading && 
          <>
            <Hero heroCMS={heroCMS}/>
            <Navigation />
            <About aboutMeCMS={aboutMeCMS}/>
            <OfferBoxes offerBoxesCMS={offerBoxesCMS}/>
            <Contact contactCMS={contactCMS}/>
            <Footer/>
          </>
        }
      </main>
    </>
  );
}

export default ClientWrapper;
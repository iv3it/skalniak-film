import SmoothScroll from './utils/SmoothScroll';
import { DMSans } from './fonts';
import EntranceOpacity from './components/EntranceOpacity/EntranceOpacity';
import Navigation from './components/Navigation/Navigation';
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <EntranceOpacity />
      <main className={`${DMSans.className}`}>
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
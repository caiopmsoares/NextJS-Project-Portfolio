import { useEffect } from 'react';
import Cards from '../components/Cards';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import HomeHero from '../components/HomeHero';
import Knowledge from '../components/Knowledge';
import Projects from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Cards />
        <Projects />
        <Knowledge />
        <ContactForm />
      </main>
      <Footer />
    </HomeContainer>
  );
}

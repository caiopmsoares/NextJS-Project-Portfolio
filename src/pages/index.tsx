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
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

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

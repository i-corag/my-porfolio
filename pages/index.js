import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import Head from 'next/head';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>iacorag</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main
        className={theme ? 'light_theme background' : 'dark_theme background'}>
        <Header />
        <Landing />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}

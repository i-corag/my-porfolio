import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';
import { Work_Sans } from '@next/font/google';

const work = Work_Sans({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={work.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

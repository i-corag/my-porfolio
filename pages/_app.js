import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';
import { Work_Sans, Archivo_Black } from '@next/font/google';

const work = Work_Sans({
  subsets: ['latin'],
});

const archivo = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
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

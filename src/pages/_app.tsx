// src/pages/_app.tsx
import { useRouter } from 'next/router';
import Layout from '@/app/layout';
import '../app/globals.css'; // Import global styles
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noLayoutNeeded = ['/login'];

  return (
    <>
      {noLayoutNeeded.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
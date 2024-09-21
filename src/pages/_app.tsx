// src/pages/_app.tsx
import { useRouter } from 'next/router';
import Layout from '@/app/layout';
import '../app/globals.css'; // Import global styles

export default function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  // List of routes where we don't want the Layout (e.g., login)
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

import { BaseLayout } from '@/ui/components/BaseLayout';
import '@sensearena/ui/theme.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'swiper/css/bundle';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>avocado</title>
      </Head>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}

export default MyApp;

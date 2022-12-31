import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/cfg/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/cfg/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/cfg/favicon-16x16.png" />
          <link rel="manifest" href="/cfg/site.webmanifest" />
          <link rel="mask-icon" href="/cfg/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#F3F4F7" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

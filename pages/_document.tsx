import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <Script id="squircle" strategy="beforeInteractive">{`
  CSS.paintWorklet.addModule(
    "https://www.unpkg.com/css-houdini-squircle@0.2.0/squircle.min.js"
  );
`}</Script>
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

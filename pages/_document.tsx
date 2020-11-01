import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            src="https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@400;700;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossOrigin="anonymous"
          />

          {/* <!-- Primary Meta Tags --> */}

          <meta name="title" content="GetIdea" />
          <meta
            name="description"
            content="We connect entrepreneurs with knowledge, support, programs, business ideas and investors they need to succeed."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="GetIdea" />
          <meta
            property="og:description"
            content="We connect entrepreneurs with knowledge, support, programs, business ideas and investors they need to succeed."
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="GetIdea" />
          <meta
            property="twitter:description"
            content="We connect entrepreneurs with knowledge, support, programs, business ideas and investors they need to succeed."
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />
          {/* favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
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

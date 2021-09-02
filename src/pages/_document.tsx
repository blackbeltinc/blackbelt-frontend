import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* <!-- Favicon  --> */}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

          {/* <!-- iOS  --> */}
          <link
            href="meta/icon-180x180.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="meta/icon-120x120.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href="meta/icon-167x167.png"
            rel="apple-touch-icon"
            sizes="167x167"
          />
          <link
            href="meta/icon-152x152.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />
          <link
            href="meta/icon-76x76.png"
            rel="apple-touch-icon"
            sizes="76x76"
          />

          {/* <!-- Startup Image  --> */}
          <link
            href="meta/splash-320x480.png"
            rel="apple-touch-startup-image"
            sizes="320x480"
          />
          <link
            href="meta/splash-640x1136.png"
            rel="apple-touch-startup-image"
            sizes="640x1136"
          />
          <link
            href="meta/splash-750x1134.png"
            rel="apple-touch-startup-image"
            sizes="750x1134"
          />
          <link
            href="meta/splash-1125x2436.png"
            rel="apple-touch-startup-image"
            sizes="1125x2436"
          />
          <link
            href="meta/splash-1242x2208.png"
            rel="apple-touch-startup-image"
            sizes="1242x2208"
          />
          <link
            href="meta/splash-1536x2048.png"
            rel="apple-touch-startup-image"
            sizes="1536x2048"
          />
          <link
            href="meta/splash-1668x2224.png"
            rel="apple-touch-startup-image"
            sizes="1668x2224"
          />
          <link
            href="meta/splash-2048x2732.png"
            rel="apple-touch-startup-image"
            sizes="2048x2732"
          />

          {/* <!-- Font  --> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

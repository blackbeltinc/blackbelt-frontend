import Head from 'next/head';

export function Meta() {
  return (
    <Head>
      {/* <!-- Must --> */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta
        name="description"
        content="App to manage brazilian jiu-jitsu students"
      />
      <link rel="manifest" href="/manifest.json" />
      <title>BlackBelt</title>

      {/* <!-- Android  --> */}
      <meta name="theme-color" content="#7E81CE" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* <!-- iOS --> */}
      <meta name="apple-mobile-web-app-title" content="BlackBelt" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* <!-- Windows  --> */}
      <meta name="msapplication-navbutton-color" content="#7E81CE" />
      <meta name="msapplication-TileColor" content="#7E81CE" />
      <meta name="msapplication-TileImage" content="meta/icon-144x144.png" />

      {/* <!-- Pinned Sites  --> */}
      <meta name="application-name" content="BlackBelt" />
      <meta name="msapplication-tooltip" content="BlackBelt" />
      <meta name="msapplication-starturl" content="/" />

      {/* <!-- Orientation  --> */}
      <meta name="screen-orientation" content="portrait" />
    </Head>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Superhighway</title>
        <meta name="description" content="Site for Superhighway" />
        <link rel="icon" href="/favicon.ico" />
        {/* To-Do: Purchase bitcount mono */}
        {/* <link
          href="//cloud.typenetwork.com/projects/6783/fontface.css/"
          rel="stylesheet"
          type="text/css"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

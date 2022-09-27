import Head from "next/head";

interface HeadProps {
  title: string;
}

const HeadSEO = ({ title }: HeadProps) => {
  const siteTitle = `${title} - Combat`;

  const shareGraphic =
    "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NlYS1vdHRlci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiIxMjAwIn19fQ==";

  const favi = "/favicon.ico";

  const description = "Combat is based in Sydney";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />

      <link rel="icon" href={favi} sizes="any" />
      {/* <link preload="true" rel="icon" type="image/svg+xml" href={favi} />
      <link preload="true" rel="mask-icon" href={favi} color="#000000" /> */}
      {/* <link rel="apple-touch-icon" href={favi} /> */}

      <link rel="preconnect" href="https://combat-site.vercel.app/" />
      <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />

      <title>{siteTitle}</title>
      {description && <meta name="description" content={description} />}

      {siteTitle && (
        <>
          <meta property="og:title" content={siteTitle} />
          <meta name="twitter:title" content={siteTitle} />
        </>
      )}

      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

      {shareGraphic && (
        <>
          <meta property="og:image" content={shareGraphic} />
          <meta name="twitter:image" content={shareGraphic} />
        </>
      )}

      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:site_name" content="Combat" />
    </Head>
  );
};

export default HeadSEO;

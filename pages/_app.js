import PreLoader from "@/src/layout/PreLoader";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Abdeljalil Rajli - Full Stack Developer" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Title */}
        <title>Abdeljalil Rajli - Full Stack Developer</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Abdeljalil Rajli - Full Stack Developer" />
        <meta property="og:description" content="Explore my portfolio as a skilled full stack developer with experience in creating dynamic and responsive web applications." />
        <meta property="og:image" content="/assets/images/website/abdeljalil-website-mockup.webp" />
        <meta property="og:url" content="https://www.3abdeljalil.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abdeljalil Rajli - Full Stack Developer" />
        <meta name="twitter:description" content="Explore my portfolio as a skilled full stack developer with experience in creating dynamic and responsive web applications." />
        <meta name="twitter:image" content="/assets/images/website/abdeljalil-website-mockup.webp" /> {/* Same as OG image */}

        {/* Favicon Icon */}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* CSS Files */}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      
      {loaded && <Component {...pageProps} />}
      <SpeedInsights />
    </Fragment>
  );
}

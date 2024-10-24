import PreLoader from "@/src/layout/PreLoader";

import Head from 'next/head';
import { Fragment, useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"


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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Title */}
        <title>Abdeljalil Rajli - Full Stack Developer</title>

        {/* Favicon Icon */}
        <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Abdeljalil Rajli - Full Stack Developer" />
        <meta property="og:description" content="Discover the portfolio of Abdeljalil Rajli, a Full Stack Developer specializing in modern web development." />
        <meta property="og:image" content="/assets/images/projects/Abdeljalil-website-mockup.webp" />
        <meta property="og:url" content="https://www.3abdeljalil.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Flaticon */}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />

        {/* Font Awesome */}
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />

        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />

        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />

        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" />

        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" />

        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>

      {/* {!loaded && <PreLoader />}  */}
      {loaded && <Component {...pageProps} />}
    <SpeedInsights/>
    </Fragment>
  );
}

import Head from 'next/head';
import '../styles/globals.css'; // Adjust the path according to your global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Abdeljalil Rajli - Full Stack Developer" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Title */}
        <title>Abdeljalil Rajli - Full Stack Developer</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Abdeljalil Rajli - Full Stack Developer" />
        <meta property="og:description" content="Discover the portfolio of Abdeljalil Rajli, a Full Stack Developer specializing in modern web development." />
        <meta property="og:image" content="https://yourwebsite.com/assets/images/hero/Abdeljalil-website-mockup.webp" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

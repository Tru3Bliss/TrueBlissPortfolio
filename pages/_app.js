import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import Script from "next/script";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

// export const metadata = {
//   applicationName: "Michael Gordon",
//   keywords: [
//     "Michael Gordon",
//     "Michael Gordon",
//     "freelancers",
//     "fullstack developer",
//     "blockchain",
//     "react developer",
//     "reactjs freelancer",
//     "nextjs",
//   ],
//   title: "Michael Gordon - fullstack Developer, Designer and Creator.",
//   description:
//     "Experienced fullstack and web3 developer with 8 years of experience. As a fullstack developer, I possess the skills and knowledge to work on both the front-end and back-end of web applications. Additionally, my experience in web3 development indicates that I have expertise in building decentralized applications using blockchain technology. With 8 years of experience, I have likely gained a deep understanding of various programming languages, frameworks, and tools necessary for developing robust and scalable web applications.",
//   alternates: {
//     canonical: "https://www.2en0.com/",
//   },
//   metadataBase: new URL("https://www.2en0.com/"),
//   openGraph: {
//     title: "Michael Gordon - fullstack Developer, Designer and Creator.",
//     description:
//       "Experienced fullstack and web3 developer with 8 years of experience. As a fullstack developer, I possess the skills and knowledge to work on both the front-end and back-end of web applications. Additionally, my experience in web3 development indicates that I have expertise in building decentralized applications using blockchain technology. With 8 years of experience, I have likely gained a deep understanding of various programming languages, frameworks, and tools necessary for developing robust and scalable web applications.",
//     url: "https://www.2en0.com/",
//     siteName: "Michael Gordon",
//     images: [
//       {
//         url: "https://www.2en0.com/opengraph.png",
//         alt: "Michael Gordon",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   icons: {
//     icon: [
//       {
//         rel: "icon",
//         url: `https://www.2en0.com/images/favicons/favicon.png`,
//       },
//       {
//         rel: "icon",
//         url: `https://www.2en0.com/images/favicons/favicon.png`,
//         sizes: "180x180",
//         type: "image/png",
//       },
//       {
//         rel: "icon",
//         url: `https://www.2en0.com/images/favicons/favicon.png`,
//         sizes: "16x16",
//         type: "image/png",
//       },
//       {
//         rel: "icon",
//         url: `https://www.2en0.com/images/favicons/favicon.png`,
//         sizes: "32x32",
//         type: "image/png",
//       },
//     ],
//     shortcut: [`https://www.2en0.com/images/favicons/favicon.png`],
//     apple: [
//       {
//         url: `https://www.2en0.com/images/favicons/favicon.png`,
//         sizes: "180x180",
//         type: "image/png",
//       },
//     ],
//   },
//   manifest: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/site.webmanifest`,
//   twitter: {
//     card: "summary_large_image",
//     title: "Michael Gordon - Web Developer, Designer and Creator.",
//     description:
//       "Experienced fullstack and web3 developer with 8 years of experience. As a fullstack developer, I possess the skills and knowledge to work on both the front-end and back-end of web applications. Additionally, my experience in web3 development indicates that I have expertise in building decentralized applications using blockchain technology. With 8 years of experience, I have likely gained a deep understanding of various programming languages, frameworks, and tools necessary for developing robust and scalable web applications.",
//     url: "https://www.2en0.com/",
//     images: {
//       url: "https://www.2en0.com/opengraph.png",
//       alt: "Michael Gordon",
//     },
//   },
// };

function MyApp({ Component, pageProps }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const imageUrl = baseUrl + '/dapp.jpg'
  return (
    <State>
      <Head>
        <meta property="og:title" content="True Bliss" />
        <meta
          property="og:description"
          content="Full stack, Blockchain Engineer. Rich experience in web3 project and building and customization, also good at Solidity & Rust. Enjoy talking with you about your vision and idea."
        />
        <meta
          property="og:image"
          content={imageUrl}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        {/* <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" /> */}
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=G-6EMX089DD6`}
          />

          <Script strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6EMX089DD6', {
                page_path: window.location.pathname,
                });
            `}
          </Script>
        </>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/basic.css" />
        <link rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/blogs.css" />
        <link rel="stylesheet" href="css/ionicons.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/gradient.css" />
        <title>Tru3 Bliss</title>
        <link rel="shortcut icon" href="images/favicons/favicon.png" />
        <link rel="canonical" href={baseUrl} />
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}

export default MyApp;

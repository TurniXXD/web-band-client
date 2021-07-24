import 'bootstrap/dist/css/bootstrap.css'
import '../styles/oxn.css'
import '../styles/globals.css'

import React from "react"
import App from "next/app"
import { AppProps } from "next/app"
import Head from "next/head"
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { createContext } from "react";
import { fetchAPI } from "lib/api";

import PropTypes from 'prop-types';

//import { getStrapiMedia } from "lib/media"

export const GlobalContext = createContext({})

const API_URL = process.env.API_URL

// Handles links to elements in page with id
const handExitComplete = () => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }
};

export default function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  const router = useRouter();
  console.log(global.favicon[0].url)

  return (
    <>
      <NextSeo
        title={global.metaTitle}
        description={global.metaDescription}
        canonical={global.url}
        openGraph={{
          url: `${global.url}`,
          title: `${global.metaTitle}`,
          description: `${global.metaDescription}`,
          images: [
            {
              url: `${global.shareImage[0].formats.large.url}`,
              width: `${global.shareImage[0].formats.large.width}`,
              height: `${global.shareImage[0].formats.large.height}`,
              alt: `${global.shareImage[0].formats.large.name}`,
            },
            {
              url: `${global.shareImage[0].formats.medium.url}`,
              width: `${global.shareImage[0].formats.medium.width}`,
              height: `${global.shareImage[0].formats.medium.height}`,
              alt: `${global.shareImage[0].formats.medium.name}`,
            },
            {
              url: `${global.shareImage[0].formats.small.url}`,
              width: `${global.shareImage[0].formats.small.width}`,
              height: `${global.shareImage[0].formats.small.height}`,
              alt: `${global.shareImage[0].formats.small.name}`,
            },
          ],
          site_name: `${global.siteName}`,
        }}
      />
      <Head>
        <link rel="icon" type="image/x-icon" href={global.favicon[0].url} />
        <meta name="theme-color" content={global.primaryColor} />
        <meta name="author" content="Jakub Vantuch" />
      </Head>
      <GlobalContext.Provider value={ global }>
        <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </GlobalContext.Provider>
    </>
  )
}

// get app's properties, ctx = context
MyApp.getInitialProps = async(ctx) => {
  try {
    const appProps = await App.getInitialProps(ctx)
    const global = await fetchAPI("global");

    return {
      ...appProps,
      pageProps: { global },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: null
    }
  }
}

import React from "react"
import App from "next/app"
import { AppProps } from "next/app"
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { createContext } from "react";

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/oxn.css'
import '../styles/globals.css'

export const GlobalContext = createContext({})

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
    <GlobalContext.Provider value={ global }>
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </GlobalContext.Provider>
  )
}

// get app's properties, ctx = context
MyApp.getInitialProps = async(ctx) => {
  try {
    const appProps = await App.getInitialProps(ctx)

    return {
      ...appProps,
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: null
    }
  }
}

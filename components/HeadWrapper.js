import Head from "next/head"
import { NextSeo } from 'next-seo';

export default function HeadWrapper({ global }) {
  return (
    <>
      <NextSeo
        title={global?.metaTitle}
        description={global?.metaDescription}
        canonical={global?.url}
        openGraph={{
          url: `${global?.url}`,
          title: `${global?.metaTitle}`,
          description: `${global?.metaDescription}`,
          images: [
            {
              url: `${global?.shareImage[0].formats?.large.url}`,
              width: `${global?.shareImage[0].formats?.large.width}`,
              height: `${global?.shareImage[0].formats?.large.height}`,
              alt: `${global?.shareImage[0].formats?.large.name}`,
            },
            {
              url: `${global?.shareImage[0].formats?.medium.url}`,
              width: `${global?.shareImage[0].formats?.medium.width}`,
              height: `${global?.shareImage[0].formats?.medium.height}`,
              alt: `${global?.shareImage[0].formats?.medium.name}`,
            },
            {
              url: `${global?.shareImage[0].formats?.small.url}`,
              width: `${global?.shareImage[0].formats?.small.width}`,
              height: `${global?.shareImage[0].formats?.small.height}`,
              alt: `${global?.shareImage[0].formats?.small.name}`,
            },
          ],
          site_name: `${global?.siteName}`,
        }}
      />
      <Head>
        <link rel="icon" type="image/x-icon" href={global?.favicon[0].url} />
        <meta name="theme-color" content={global?.primaryColor} />
        <meta name="author" content="https://github.com/TurniXXD" />
      </Head>
    </>
  )
}
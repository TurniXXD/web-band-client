import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo'

export default class CustomDocument extends Document {
	render() {
		return (
			<Html lang="cs">
				<NextSeo
					title=/* {global?.metaTitle} */"Steepens"
					description={global?.metaDescription}
					canonical={global?.url}
					openGraph={{
						url: `${global?.url}`,
						title: `${global?.metaTitle}`,
						description: `${global?.metaDescription}`,
						// images: [
						// 	{
						// 		url: `${global?.shareImage[0]?.formats?.large.url}`,
						// 		width: `${global?.shareImage[0]?.formats?.large.width}`,
						// 		height: `${global?.shareImage[0]?.formats?.large.height}`,
						// 		alt: `${global?.shareImage[0]?.formats?.large.name}`,
						// 	},
						// 	{
						// 		url: `${global?.shareImage[0]?.formats?.medium.url}`,
						// 		width: `${global?.shareImage[0]?.formats?.medium.width}`,
						// 		height: `${global?.shareImage[0]?.formats?.medium.height}`,
						// 		alt: `${global?.shareImage[0]?.formats?.medium.name}`,
						// 	},
						// 	{
						// 		url: `${global?.shareImage[0]?.formats?.small.url}`,
						// 		width: `${global?.shareImage[0]?.formats?.small.width}`,
						// 		height: `${global?.shareImage[0]?.formats?.small.height}`,
						// 		alt: `${global?.shareImage[0]?.formats?.small.name}`,
						// 	},
							images: [
								{
									url: '/public/images/steepens-logo-rectangle.png',
									width: 1000,
									height: 1000,
									alt: 'Steepens',
								},
								{
									url: '/public/images/steepens-logo-rectangle.png',
									width: 750,
									height: 750,
									alt: 'Steepens',
								},
								{
									url: '/public/images/steepens-logo-rectangle.png',
									width: 500,
									height: 500,
									alt: 'Steepens',
								}
						],
						site_name: /* `${global?.siteName}` */"Steepens",
					}}
				/>
				<Head>
					<link rel="shortcut icon" href=/* {global?.favicon[0]?.url} */"/static/favicon.ico" />
					<meta name="theme-color" content={global?.primaryColor} />
					<meta name="author" content="https://github.com/TurniXXD" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

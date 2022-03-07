import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo'

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="cs">
				<Head/>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

import React from 'react'
import axios from 'axios'
import path from 'path'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
	entry: path.join(__dirname, 'src', 'index.tsx'),
	// getRoutes: async () => {
	// 	return [
	// 		{
	// 			path: '/',
	// 			template: 'src/pages/index/index',
	// 		},
	// 	]
	// },
	Document: ({
		Html,
		Head,
		Body,
		children,
		state,
	}) => {
		console.log('state', state);
		return (
			<Html lang="zh-cn">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
				</Head>
				<Body>{children}</Body>
			</Html>
		)

	},
	// extractCssChunks: true,
	plugins: [
		'react-static-plugin-typescript',
		[
			'react-static-plugin-react-router',
			{
				RouterProps: {
					// These props will be passed to the underlying `Router` component
				},
			},
		],
		[
			"react-static-plugin-less",
			{
				includePaths: ["..."], // always includes `src/`
				cssLoaderOptions: {}, // options for the css-loader, like modules
				// other options for the less-loader
			}
		],
		[
			require.resolve('react-static-plugin-source-filesystem'),
			{
				location: path.resolve('./src/pages'),
			},
		],
		require.resolve('react-static-plugin-sitemap'),
	],
}

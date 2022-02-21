import React from 'react'
import { Root, Head, Routes, addPrefetchExcludes, useRouteData } from 'react-static'
import 'normalize.css';

import './app.less'

function App() {
	return (
		<Root>
			<Head>
				<meta charSet="UTF-8" />
				<title>深圳市冰河国际货运代理有限公司</title>
			</Head>
			<React.Suspense fallback={<div />}>
				<Routes
					// render={({ routePath, getComponentForPath }) => {
					// 	// The routePath is used to retrieve the component for that path
					// 	const element = getComponentForPath(routePath)
					// 	return element
					// }}
				/>
			</React.Suspense>
		</Root>
	)
}

export default App

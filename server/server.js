import expess from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import AppRouter from '../src/routes/AppRouter.tsx';

const PORT = 8000;

const app = expess();

app.use('^/$', (req, res, next) => {
	fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
		if (err) {
			console.log({ err });
			return res.status(500).send('Some error');
		}

		const html = ReactDOMServer.renderToString(
			<StaticRouter location={req.originalUrl}>
				<AppRouter />
			</StaticRouter>
		);
		// const html = 'Hello';

		return req.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
	});
});

app.use(expess.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
	console.log(`App launched om ${PORT}`);
});

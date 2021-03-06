'use strict';

/* Server specific version of Zone.js */
require('zone.js/dist/zone-node');
import { enableProdMode } from '@angular/core';
enableProdMode();
import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';


/* The server bundle is loaded here, it's why you don't want a changing hash in it */
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');

/* Server-side rendering */
const angularRouter = (req, res) => {
  /* Server-side rendering */
  res.render('index', { req, res });
}

const app = express();

/* Root route before static files, or it will serve a static index.html, without pre-rendering */
app.get('/', angularRouter);

/* Serve the static files generated by the CLI (index.html, CSS? JS, assets...) */
app.use(express.static(`${__dirname}/dist`));

/* Configure Angular Express engine */
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [provideModuleMap(LAZY_MODULE_MAP)]
}));
app.set('view engine', 'html');
app.set('views', 'dist');

/* Direct all routes to index.html, where Angular will take care of routing */
app.get('*', angularRouter);

app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});

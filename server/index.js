const Backend = require('i18next-node-fs-backend')
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const i18nextMiddleware = require('i18next-express-middleware')
const next = require('next');
const path = require('path')

const i18n = require('../i18n')
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    preload: ['en', 'de'], // preload all langages
    ns: ['common', 'home', 'page2'], // need to preload all the namespaces
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
      addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json')
    }
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare().then(() => {
      const server = express();
    
      // Strip trailing slash
      server.use((req, res, next) => {
        if (req.path.substr(-1) == '/' && req.path.length > 1) {
          const query = req.url.slice(req.path.length);
          res.redirect(301, req.path.slice(0, -1) + query);
        } else {
          next();
        }
      });
    
      // Server routes & security
      server
        .use(helmet())
        .use(express.static('static'))
            // enable middleware for i18next
            .use(i18nextMiddleware.handle(i18n))
    
            // serve locales for client
            .use('/locales', express.static(path.join(__dirname, '/locales')))
    
            // missing keys
            .post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))
        .use(handler)
        // .use(bodyParser.json())
        // .use(bodyParser.urlencoded({ extended: true }))
        .use(compression());
    
      server.get('*', (req, res) => handle(req, res));
    
      server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
      });
    })
  })

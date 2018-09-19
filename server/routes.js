/* eslint-disable no-multi-assign */

const routes = (module.exports = require('next-routes')());

routes
  // Taxonomy archives
  .add('brandList', '/brands', 'about')

  // Tax term
  .add('brand', '/brand/:id', 'tax-term');

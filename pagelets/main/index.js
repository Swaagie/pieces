'use strict';

//
// Routable main pagelet.
//
require('pagelet').extend({
  path: '/',
  method: 'GET',

  view: 'client.jsx',
  css: 'client.less',

  pagelets: {
    j: require('../j'),
    s: require('../s')
  }
}).on(module);
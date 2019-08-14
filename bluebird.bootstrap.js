// code for SDK < 8.1.0.GA
// require('/ti.internal/extensions/binding')('bluebird', '/node_modules/@titanium/bluebird');

// Code for SDK >= 8.1.0.GA
global.binding.register('bluebird', require('@titanium/bluebird'));


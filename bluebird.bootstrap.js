require('/ti.internal/extensions/binding')('bluebird', '/node_modules/@titanium/bluebird');
// WARNING:  This code below does not work when working with LiveView.  
// When using LiveView,  you must include the line below in your alloy.js file
global.Promise = require('@titanium/bluebird');

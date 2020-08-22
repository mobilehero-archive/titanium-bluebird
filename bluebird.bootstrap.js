// TIBUG:  Fix for https://jira.appcelerator.org/browse/TIMOB-28094
global.process[Symbol.toStringTag] = 'process';
global.binding.register('bluebird', require('@titanium/bluebird'));


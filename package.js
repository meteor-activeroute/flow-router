// @flow
Package.describe({
  documentation: 'README.md',
  git: 'git+https://github.com/activeroute/flow-router.git',
  name: 'activeroute:flow-router',
  summary: 'kadira:flow-router adapter for activeroute:core.',
  version: '0.1.0',
});

Package.onUse(function onUse(api) {
  api.versionsFrom('1.4.2.2');

  api.use('ecmascript');

  api.use([
    'activeroute:core@0.0.1',
    'kadira:flow-router@2.12.1',
  ]);

  api.mainModule('client/activeroute-flowrouter.js', 'client');
});

Package.describe({
  documentation: 'README.md',
  git: 'https://github.com/activeroute/flow-router.git',
  name: 'activeroute:flow-router',
  summary: 'Flow-Router adapter for active-route.',
  version: '0.0.1',
});

Package.onUse(function onUse(api) {
  api.versionsFrom('1.3.2.4');

  api.use('ecmascript');

  api.use([
    'activeroute:core@0.0.1',
    'kadira:flow-router@2.12.1',
  ]);

  api.mainModule('client/activeroute-flowrouter.js', 'client');
  api.mainModule('server/activeroute-flowrouter.js', 'server');
});

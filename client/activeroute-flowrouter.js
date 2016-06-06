import { registerRouter } from 'meteor/activeroute:core';

const adapter = {
  client: true,
  name: 'flow-router',
  path() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  },
  pathFor(...args) {
    return FlowRouter.path(...args);
  },
  server: false,
};

registerRouter(adapter);

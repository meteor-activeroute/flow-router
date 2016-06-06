import { registerRouter } from 'meteor/activeroute:core';

const adapter = {
  client: true,
  name: 'flow-router',
  server: false,
};

registerRouter(adapter);

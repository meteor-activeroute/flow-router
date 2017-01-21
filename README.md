# activeroute:flow-router

This is the kadira:flow-router adapter for activeroute:core.

This adapter only work in client code as kadira:flow-router
is a client-side only router.

## Install

```sh
meteor add activeroute:flow-router
```

## Usage

This package is useless on it's own, it's a router adapter for
[activeroute:core].

```js
import ActiveRoute from 'meteor/activeroute:core';
import adapter from 'meteor/activeroute:flow-router';

const activeRoute = new ActiveRoute({
  routerAdapter: adapter,
});

activeRoute.name('home');
// return true/false
```

[activeroute:core]: https://github.com/meteor-activeroute/core

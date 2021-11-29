import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { ReactQueryDevtools } from 'react-query/devtools';

import 'assets/styles/main.css';

import { AppProviders } from 'providers/AppProviders';

import { App } from './app/App';
import * as serviceWorker from './serviceWorker';
import { mockServer } from './api/mocks/mock-server';

const openReactQueryDevtools = process.env.NODE_ENV === 'development';

mockServer();

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });
}

ReactDOM.render(
  <AppProviders>
    <App />
    {openReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
  </AppProviders>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

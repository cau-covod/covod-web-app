import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { config } from './services/covod-api';
import { getConfig } from './app-config';

const settings = getConfig();

config.init({
  baseUrl: settings.baseApiUrl,
  clientId: settings.clientId
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

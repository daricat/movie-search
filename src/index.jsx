import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, store } from './js/redux/store';

import App from './js/App';

window.addEventListener('load', () => {
  ReactDOM.render(
  <Provider store = { store }>
    <PersistGate persistor = { persistor }>
      <App />
    </PersistGate>    
  </Provider>,
  document.querySelector('.main-react')
)
})



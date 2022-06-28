import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import '../src/styles/styles.css'
import '../src/styles/styles'
import { Provider } from 'react-redux';
import { store } from './redux/store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>
);

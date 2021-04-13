import React, { useReducer } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ContextUser } from '../context';
import { CartProvider } from 'context/Shopping';
import userReducer from '../reducers/auth';
import { auth } from '../reducers/initialState';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import '../styles/extra.scss';
import 'react-tabs/style/react-tabs.css';

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(userReducer, auth);

  return (
    <ToastProvider>
      <ContextUser.Provider value={[state, dispatch]}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ContextUser.Provider>
    </ToastProvider>
  );
}

export default MyApp;

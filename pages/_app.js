import Router from 'next/router';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NProgress from 'nprogress';
import { Provider } from "react-redux";
import { useStore } from '../redux/store'

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
     <Provider store={store}>
          <Component {...pageProps} />
     </Provider>
  )
}

export default MyApp;

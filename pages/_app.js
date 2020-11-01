import Router from 'next/router';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

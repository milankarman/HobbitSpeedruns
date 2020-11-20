import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.scss';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default MyApp;

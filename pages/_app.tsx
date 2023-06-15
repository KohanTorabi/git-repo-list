import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Repositories</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

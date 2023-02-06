import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Playfair_Display, Inconsolata } from "@next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inconsolata = Inconsolata({});
const PlayfairDisplay = Playfair_Display({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#71cf44" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="theme-color" content="#ffffff" />
        <style>{dom.css()}</style>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <main className={inconsolata.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;

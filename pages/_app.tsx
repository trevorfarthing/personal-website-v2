import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Playfair_Display, Inconsolata } from "@next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Layout from "../components/Layout/Layout";

const inconsolata = Inconsolata({});
const PlayfairDisplay = Playfair_Display({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <main className={inconsolata.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

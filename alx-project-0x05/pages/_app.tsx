// pages/_app.tsx
import "@/styles/globals.css";  // import global CSS
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext"; // context for state
import Layout from "@/components/layouts/Layout"; // your layout wrapper

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}

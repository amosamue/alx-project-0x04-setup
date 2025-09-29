import { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  );
}

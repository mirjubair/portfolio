import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Background from "@/components/Background";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Background />
      <main className="relative z-10 text-white">
        <Component {...pageProps} />
      </main>
    </>
  );
}

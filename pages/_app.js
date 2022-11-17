import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: "400",
});
function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;

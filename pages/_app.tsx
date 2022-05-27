import "../styles/global.scss";
import {AppProps} from "next/app";
import Layout from "../components/Layout/Layout";

function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

/* export function reportWebVitals(metric: any) {
  if (metric.label === "web-vital") {
    console.log(metric);
  }
} */

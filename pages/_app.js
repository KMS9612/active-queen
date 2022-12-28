import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "../src/common/layout/index";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="ActiveQueen, 액티브퀸, 모델협회, 시니어 모델협회, 시니어 모델, 다국적 모델협회"></meta>
        <meta name="description" content="장애인, 시니어 모델양성에 기여하는 액티브 퀸 모델협회"></meta>
        <meta name="author" content="김민승, KMS9612"></meta>
        <title>액티브 퀸-ActiveQueen</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

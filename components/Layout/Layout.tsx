import Head from "next/head";
import styles from "./layout.module.scss";
import Sidebar from "../Sidebar/Sidebar";

function Layout({children}: any) {
  return (
    <>
      <Head>
        <title>Layouts Example + {children.title}</title>
        <meta name="description" content="Template with nextjs." />
      </Head>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;

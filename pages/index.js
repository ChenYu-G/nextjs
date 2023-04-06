import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit,
          saepe in dolorem sequi quibusdam facere, eveniet nulla, inventore
          nesciunt deleniti quidem cupiditate? Deserunt eaque, quibusdam quis
          asperiores accusantium atque!
        </p>
      </section>
    </Layout>
  );
}

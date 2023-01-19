import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/work.module.scss";
import { workSections } from "../content/work";
import WorkSection from "../components/WorkSection/WorkSection";
import { Typography } from "@mui/material";

const Work: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Work - Trevor Farthing</title>
        <meta name="description" content="Trevor Farthing's work and projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3" className={styles.pageTitle}>
          Work / Projects...
        </Typography>
        {workSections.map((section, index) => (
          <WorkSection
            sectionTitle={section.title}
            images={section.images}
            sectionContent={section.content}
            key={index}
          />
        ))}
      </main>
    </div>
  );
};

export default Work;

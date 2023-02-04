import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/work.module.scss";
import { workSections } from "../content/work";
import WorkSection from "../components/WorkSection/WorkSection";
import { Fade, Typography } from "@mui/material";

const Work: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Work - Trevor Farthing</title>
        <meta name="description" content="Trevor Farthing's work and projects." />
      </Head>

      <main className={styles.main}>
        <Fade in={true} timeout={1500}>
          <Typography variant="h3" className={styles.pageTitle}>
            Work / Projects...
          </Typography>
        </Fade>
        {workSections.map((section) => (
          <WorkSection
            sectionTitle={section.title}
            images={section.images}
            sectionContent={section.content}
            key={section.title}
          />
        ))}
      </main>
    </div>
  );
};

export default Work;

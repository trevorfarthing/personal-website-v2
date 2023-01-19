import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/about.module.scss";
import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import aboutPic from "../public/about-photo.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Trevor Farthing</title>
        <meta name="description" content="Info about Trevor Farthing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid container spacing={8} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <div className={styles.imageContainer}>
              <Image src={aboutPic} alt="Profile picture" fill />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={styles.nameText}>
              Trevor Farthing
            </Typography>
            <Divider variant="fullWidth" className={styles.secondaryDivider} />
            <Typography variant="h5" className={styles.jobTitleText}>
              Software Engineer
            </Typography>
            <div className={styles.aboutPoints}>
              <Typography variant="body1" className={styles.infoText}>
                <LocationOnIcon className={styles.icon} />
                Seattle, WA
              </Typography>
              <Typography variant="body1" className={styles.infoText}>
                <WorkIcon className={styles.icon} />
                Valence
              </Typography>
              <Typography variant="body1" className={styles.infoText}>
                <SchoolIcon className={styles.icon} />
                Gonzaga University
              </Typography>
              <Typography variant="body1" className={styles.infoText}>
                <DownloadIcon className={styles.icon} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/Trevor-Farthing-Resume.pdf"
                  download
                  className={styles.inlineLink}
                >
                  Resume
                </a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              {`Hello, my name is Trevor!  I'm a software engineer with 4 years of experience based out of the Greater Seattle Area.
                 I graduated with a B.S. in Computer Science from Gonzaga University and am currently working at Valence, a digital strategy, design, and engineering firm.
                 I am passionate about writing clean and effective frontend code in React and other Javascript frameworks, but can seamlessly jump into fullstack roles.`}
            </Typography>
            <Typography variant="body1">
              {`In my free time, I enjoy playing the guitar and producing music.  You can find some of my past work on the Music page.  Some of my other hobbies include toying around with
              new Smart Home products, playing Darts, Shuffleboard, or Bowling, and finding new local breweries.`}
            </Typography>
            <Typography variant="body1">{`Download my resume above for more information or contact me using the links below if you'd like to get in touch.`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={styles.dotDivider}>
              . . .
            </Typography>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default About;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import profilePic from "../public/profile-picture3.png";
import { Divider, Fade, Grid, Typography } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";

const transitionTimeout = 1500;

const Home: NextPage = () => {
  // State
  const [isHeadingCursorVisible, setIsHeadingCursorVisible] = useState(true);
  const [isSubHeadingCursorVisible, setIsSubHeadingCursorVisible] = useState(false);

  // Callbacks
  const onHeadingTypewriterDone = () => {
    setIsHeadingCursorVisible(false);
    setIsSubHeadingCursorVisible(true);
  };

  // Typewriters
  const { text: headingText } = useTypewriter({
    words: ["", "Hi, I'm Trevor."],
    loop: 1,
    onLoopDone: onHeadingTypewriterDone,
    delaySpeed: 300,
    typeSpeed: 175,
  });

  const { text: subHeadingPrefix } = useTypewriter({
    words: ["", "I like to "],
    loop: 1,
    delaySpeed: 1100,
    typeSpeed: 175,
  });

  const { text: subHeadingText } = useTypewriter({
    words: ["", "create.", "code.", "produce.", "brainstorm.", "collaborate."],
    loop: 0,
    delaySpeed: 1150,
    typeSpeed: 175,
    deleteSpeed: 70,
  });

  return (
    <div>
      <Head>
        <title>Trevor Farthing</title>
        <meta name="description" content="The home page of Trevor Farthing's personal website." />
      </Head>

      <main className={styles.main}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Fade in={true} timeout={transitionTimeout}>
            <Grid item xs={6}>
              <div className={styles.imageContainer}>
                <Image src={profilePic} alt="Profile picture" className={styles.profileImage} fill priority />
              </div>
            </Grid>
          </Fade>
          <Grid item xs={6}>
            <Typography variant="h2" className={styles.heading}>
              {headingText}
              {isHeadingCursorVisible && <Cursor />}
            </Typography>
            <Typography variant="h4" className={styles.subHeading}>
              {subHeadingPrefix}
              {subHeadingText}
              {isSubHeadingCursorVisible && <Cursor />}
            </Typography>
            <Fade in={true} timeout={transitionTimeout}>
              <div>
                <Divider variant="fullWidth" className={styles.secondaryDivider} />
                <Typography variant="body1" className={styles.introText}>
                  {`I'm a full-stack software engineer, musician, and generally creative person who loves to bring innovative projects to life. 
              I've worked with a healthcare startup, a rocket rideshare company, an industrial IoT firm, and a variety of
              other ventures. I'm proficient in a collection of programming languages, as well as the art of recording
              and mixing music in digital audio workstations.`}
                </Typography>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Home;

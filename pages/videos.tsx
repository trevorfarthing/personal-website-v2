import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/videos.module.scss";

const About: NextPage = () => {
  const videos = [
    "https://www.youtube.com/embed/OQK89OHH2mI?autoPlay=1",
    "https://www.youtube.com/embed/uv6omayGEIg?autoPlay=1",
    "https://www.youtube.com/embed/-Hpjz14QCs8?autoPlay=1",
    "https://www.youtube.com/embed/bJH-3TOVRCI?autoPlay=1",
    "https://www.youtube.com/embed/suMhsG9OrZw?autoPlay=1",
    "https://www.youtube.com/embed/nkd9uYWwxBo?autoPlay=1",
    "https://www.youtube.com/embed/YlGjjUhj974?autoPlay=1",
    "https://www.youtube.com/embed/50zmcISRgJA?autoPlay=1",
    "https://www.youtube.com/embed/PZHV0FOZgVw?autoPlay=1",
    "https://www.youtube.com/embed/v8V3Nq87aoU?autoPlay=1",
  ];

  const [isLoading, setIsLoading] = useState(false);

  // TODO: Find another way to do this
  // useEffect(() => {
  //   if (window) {
  //     window.onload = () => {
  //       setIsLoading(false);
  //     };
  //   }
  // }, []);

  return (
    <div>
      <Head>
        <title>Videos - Trevor Farthing</title>
        <meta name="description" content="Music videos of Trevor Farthing." />
      </Head>

      <main className={styles.main}>
        {isLoading ? (
          <>
            <FontAwesomeIcon icon={faSpinner} className={`fa-spin ${styles.loadingIcon}`} />
            <Typography variant="body1" component="span">
              {"Loading videos..."}
            </Typography>
          </>
        ) : (
          <Typography variant="body1">{"Guitar covers, music videos, and the like."}</Typography>
        )}
        <Divider variant="fullWidth" className={styles.divider} />
        <div className={styles.videoBlock}>
          {videos.map((video, index) => (
            <div className={styles.iFrameContainer} key={index}>
              <iframe
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width={800}
                height={450}
              ></iframe>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;

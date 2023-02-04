import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/music.module.scss";
import { Divider, Fade, Grid, Grow, Typography } from "@mui/material";
import { getLinkType } from "../utils/music";
import { trackList } from "../content/music";
import SongCard from "../components/SongCard/SongCard";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayerWrapper = dynamic(() => import("../components/ReactPlayerWrapper/ReactPlayerWrapper"), {
  ssr: false,
});

declare global {
  interface Window {
    SC: any;
  }
}

const Music: NextPage = () => {
  // React Player ref
  const player = useRef<any>();
  // Track selected for playing
  const [selectedURL, setSelectedURL] = useState("");
  // If player is playing or not
  const [isPlaying, setIsPlaying] = useState(false);
  // Progress of selected track in seconds
  const [selectedProgress, setSelectedProgress] = useState(0);
  // Is player ready
  const [isReady, setIsReady] = useState(false);
  // Super janky fix for weird React Player behavior.
  // Tracking this so we can avoid the first incorrect progress event from the prior track.
  const [progressEventCounter, setProgressEventCounter] = useState(0);

  const onPlay = () => {
    console.log("PLAY");
  };
  const onReady = () => {
    setIsReady(true);
  };
  const onEnded = () => {
    setIsPlaying(false);
  };

  const onProgress = (progress: any) => {
    if (isPlaying) {
      setSelectedProgress(progress.playedSeconds);
      setProgressEventCounter((currentCounter) => currentCounter + 1);
    }
  };

  const seekTo = (position: number, type: "seconds" | "fraction") => {
    player.current?.seekTo(position, type);
  };

  return (
    <div>
      <Head>
        <title>Music - Trevor Farthing</title>
        <meta name="description" content="Music by Trevor Farthing." />
      </Head>
      <main className={styles.main}>
        <Typography variant="h3" className={styles.pageTitle}>
          Music
        </Typography>
        <Typography variant="body1">{"Some tracks I've produced or recorded on."}</Typography>
        <Divider variant="fullWidth" className={styles.divider} />
        <Grid container spacing={4} alignItems="center" justifyContent="center" className={styles.musicContainer}>
          {trackList.map((track, index) => {
            return (
              <Fade in={true} timeout={1500} key={track.title} style={{ transitionDelay: `${index * 200}ms` }}>
                <Grid item xs={12} sm={6} md={4}>
                  <div className={styles.trackContainer}>
                    <SongCard
                      songTitle={track.title}
                      albumArtSource={track.artworkSource}
                      externalLink={{ link: track.link, linkType: getLinkType(track) }}
                      selectedURL={selectedURL}
                      setSelectedURL={setSelectedURL}
                      scURL={track.scURL}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                      seekTo={seekTo}
                      isReady={isReady}
                      setIsReady={setIsReady}
                      progressEventCounter={progressEventCounter}
                      setProgressEventCounter={setProgressEventCounter}
                      {...(selectedURL === track.scURL ? { progress: selectedProgress } : {})}
                      {...(selectedURL === track.scURL ? { duration: player.current?.getDuration() } : {})}
                    />
                  </div>
                </Grid>
              </Fade>
            );
          })}
        </Grid>
        <ReactPlayerWrapper
          url={selectedURL}
          playing={isPlaying}
          volume={1}
          onReady={onReady}
          onEnded={onEnded}
          onPlay={onPlay}
          className={styles.musicPlayer}
          onProgress={onProgress}
          playerRef={player}
        />
      </main>
    </div>
  );
};

export default Music;

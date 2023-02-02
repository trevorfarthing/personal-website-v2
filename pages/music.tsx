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
  // Duration of selected track in seconds
  const [selectedDuration, setSelectedDuration] = useState(0);
  // Progress of selected track in seconds
  const [selectedProgress, setSelectedProgress] = useState(0);
  // Is player ready
  const [isReady, setIsReady] = useState(false);

  const onPlay = () => {
    console.log("playing");
  };
  const onReady = () => {
    setIsReady(true);
  };
  const onBuffer = () => {
    console.log("buffering");
  };

  const onDuration = (duration: number) => {
    setSelectedDuration(duration);
  };

  const onProgress = (progress: any) => {
    console.log("on progress " + progress.playedSeconds);
    setSelectedProgress(progress.playedSeconds);
  };

  const seekTo = (position: number, type: "seconds" | "fraction") => {
    console.log("seek to " + position);
    player.current?.seekTo(position, type);
  };

  return (
    <div>
      <Head>
        <title>Music - Trevor Farthing</title>
        <meta name="description" content="Music by Trevor Farthing." />
      </Head>
      <main className={styles.main}>
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
                      {...(selectedURL === track.scURL ? { progress: selectedProgress } : {})}
                      {...(selectedURL === track.scURL ? { duration: selectedDuration } : {})}
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
          onPlay={onPlay}
          onReady={onReady}
          onBuffer={onBuffer}
          className={styles.musicPlayer}
          onDuration={onDuration}
          onProgress={onProgress}
          playerRef={player}
        />
      </main>
    </div>
  );
};

export default Music;

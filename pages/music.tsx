import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/music.module.scss";
import { Divider, duration, Grid, Typography } from "@mui/material";
import { trackList, getLinkType } from "../utils/music";
import SongCard from "../components/SongCard/SongCard";
// import SC from "../public/soundcloud";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    SC: any;
  }
}

const Music: NextPage = () => {
  // SoundCloud Player Widget
  const scPlayer = useRef<any>(null);
  // Mapping of track ID to index in the playlist
  const trackMap = useRef<Record<string, number>>({});
  // Track selected for playing
  const [selectedTrack, setSelectedTrack] = useState("");
  // Array of track durations in ms
  const [trackDurations, setTrackDurations] = useState<number[]>([]);

  useEffect(() => {
    // When the SoundCloud player is ready, get the track durations.
    // For some reason this logic needs to be duplicated in onSCScriptReady to reliably work across refreshes, page changes, etc.
    if (typeof window !== "undefined" && window.SC) {
      scPlayer.current = window.SC.Widget("sc-player");
      scPlayer.current?.bind(window.SC.Widget.Events.READY, () => {
        scPlayer.current?.getSounds((sounds: any[]) => {
          setTrackDurations(sounds.map((sound) => sound.duration));
        });
      });
    }
    trackMap.current = trackList.reduce((acc, curr, index) => ({ ...acc, [curr.title.replace(/ /g, "")]: index }), {});
    return () => {
      scPlayer.current?.unbind(window.SC.Widget.Events.READY);
    };
  }, []);

  // Callback when SoundCloud script has finished loading
  const onSCScriptReady = () => {
    if (typeof window !== "undefined" && window.SC) {
      scPlayer.current = window.SC.Widget("sc-player");
      scPlayer.current?.getSounds((sounds: any[]) => {
        setTrackDurations(sounds.map((sound) => sound.duration));
      });
    }
  };

  // Logic for when play/pause button is clicked
  const onPlayPauseTrack = (trackId: string, startPositionMs?: number) => {
    const trackIndex = trackMap.current[trackId];
    setSelectedTrack(trackId);
    if (trackId && selectedTrack !== trackId) {
      scPlayer.current?.pause();
      scPlayer.current?.skip(trackIndex);
      scPlayer.current?.seekTo(startPositionMs);
      scPlayer.current?.play();
    } else {
      scPlayer.current?.pause();
    }
  };

  return (
    <div>
      <Head>
        <title>Music - Trevor Farthing</title>
        <meta name="description" content="Music by Trevor Farthing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="soundcloud.js" type="text/javascript" onReady={onSCScriptReady} />
      <main className={styles.main}>
        <Typography variant="body1">{"Some tracks I've produced or recorded on."}</Typography>
        <Divider variant="fullWidth" className={styles.divider} />
        <Grid container spacing={4} alignItems="center" justifyContent="center" className={styles.musicContainer}>
          {trackList.map((track, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={track.title}>
                <div className={styles.trackContainer}>
                  <SongCard
                    id={track.title.replace(/ /g, "")}
                    songTitle={track.title}
                    albumArtSource={track.artworkSource}
                    externalLink={{ link: track.link, linkType: getLinkType(track) }}
                    selectedTrack={selectedTrack}
                    onPlayPauseTrack={onPlayPauseTrack}
                    duration={trackDurations[index]}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1068923353&amp;auto_play=false"
          id="sc-player"
          style={{ display: "none" }}
        ></iframe>
      </main>
    </div>
  );
};

export default Music;

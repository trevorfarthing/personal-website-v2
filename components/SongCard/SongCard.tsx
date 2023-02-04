import styles from "./SongCard.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Box, Slider, styled, Typography } from "@mui/material";
import { formatDuration } from "../../utils/music";
import { useEffect, useState, forwardRef } from "react";
import { boxStyleOverrides, sliderStyleOverrides } from "./style-overrides";
import { SongCardProps, SongState, SongStates } from "../../types/music-types";
import SongIconLink from "../SongIconLink/SongIconLink";
import { isSafari } from "react-device-detect";

const SongCard = forwardRef(function SongCard({
  albumArtSource,
  songTitle,
  externalLink,
  selectedURL,
  setSelectedURL,
  duration,
  progress,
  scURL,
  isPlaying,
  setIsPlaying,
  seekTo,
  isReady,
  setIsReady,
  progressEventCounter,
  setProgressEventCounter,
}: SongCardProps) {
  const [playButtonStyles, setPlayButtonStyles] = useState({ opacity: 0 });
  // Is track playing, paused, or loading
  const [songState, setSongState] = useState<SongState>(SongStates.PAUSED);
  // Stores duration for this track only (in seconds).
  const [internalDuration, setInternalDuration] = useState(0);
  // Tracks progress for this track only (in seconds).
  const [internalProgress, setInternalProgress] = useState(0);
  // If track is loading. Usually set when song is being loaded into player, before isReady.
  const [isLoading, setIsLoading] = useState(false);

  // Show/hide the play button and time display on hover
  const onMouseEnterSongBox = () => {
    setPlayButtonStyles({ opacity: 1 });
  };
  const onMouseLeaveSongBox = () => {
    setPlayButtonStyles({ opacity: 0 });
  };

  const handleTogglePlaySong = () => {
    if (selectedURL === scURL) {
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(false);
      setIsReady(false);
      setSelectedURL(scURL);
      setProgressEventCounter(0);
      setIsLoading(true);
    }
  };

  // When the selectedTrack changes, update the state
  useEffect(() => {
    if (selectedURL === scURL && isPlaying) {
      setSongState(SongStates.PLAYING);
    } else if (selectedURL === scURL && isLoading) {
      setSongState(SongStates.LOADING);
    } else {
      setSongState(SongStates.PAUSED);
    }
  }, [selectedURL, setSongState, scURL, isPlaying, isLoading]);

  // Set duration
  useEffect(() => {
    if (duration) {
      setInternalDuration(duration);
    }
  }, [duration, internalDuration]);

  // Set progress
  useEffect(() => {
    if (progress && isPlaying && progressEventCounter > 1) {
      setInternalProgress(progress);
    }
  }, [progress, isPlaying, progressEventCounter]);

  // Once player is ready, seek to the progress and play
  useEffect(() => {
    if (isReady && selectedURL === scURL) {
      seekTo(internalProgress, "seconds");
      setIsPlaying(true);
      setIsReady(false);
      setIsLoading(false);
    }
  }, [isReady, selectedURL, internalProgress, scURL, seekTo, setIsPlaying, setIsReady]);

  const onSliderChange = (event: Event, value: number | number[]) => {
    setInternalProgress(value as number);
    seekTo(value as number, "seconds");
  };

  const TinyText = styled(Typography)({
    fontSize: "0.75rem",
    opacity: 0.5,
    fontWeight: 500,
    letterSpacing: 0.2,
    color: "#fff",
  });

  return (
    <div className={styles.songBox} onMouseEnter={onMouseEnterSongBox} onMouseLeave={onMouseLeaveSongBox}>
      <Image
        className={styles.albumArt}
        alt={`Album artwork for the song ${songTitle}`}
        src={albumArtSource}
        width={500}
        height={500}
      />
      <div className={styles.playButton} style={playButtonStyles} onClick={handleTogglePlaySong}>
        <FontAwesomeIcon
          icon={
            { [SongStates.PAUSED]: faPlay, [SongStates.LOADING]: faSpinner, [SongStates.PLAYING]: faPause }[songState]
          }
          className={`${songState === SongStates.LOADING ? ` fa-spin ${styles.loadingIcon}` : styles.playIcon}`}
        />
        <div className={styles.circleSlider}></div>
      </div>
      <Box className={styles.timeDisplay} sx={boxStyleOverrides}>
        <TinyText>{formatDuration(internalProgress)}</TinyText>
        {internalDuration && !isLoading ? (
          <TinyText>-{formatDuration(internalDuration - internalProgress)}</TinyText>
        ) : null}
      </Box>
      <div className={styles.sliderContainer}>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={internalProgress}
          min={0}
          step={1}
          max={internalDuration}
          onChange={onSliderChange}
          className={styles.slider}
          sx={sliderStyleOverrides}
        />
      </div>
      <div className={styles.songCaption}>
        <Typography component="span" variant="body2" className={styles.songTitle}>
          {songTitle}
        </Typography>
        <SongIconLink linkType={externalLink.linkType} link={externalLink.link} />
      </div>
    </div>
  );
});

export default SongCard;

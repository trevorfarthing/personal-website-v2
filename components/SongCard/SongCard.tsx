import Link from "next/link";
import styles from "./SongCard.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faSoundcloud, faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faPause, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Box, Slider, styled, Typography } from "@mui/material";
import { linkTypes, formatDuration } from "../../utils/music";
import { forwardRef, useEffect, useState } from "react";
import { boxStyleOverrides, sliderStyleOverrides } from "./style-overrides";
import { SongCardProps, SongState, SongStates } from "../../types/music-types";

const IconLink = ({ linkType, link }: { linkType: string; link: string }) => {
  const linkClasses = {
    [linkTypes.spotify]: styles.spotifyLink,
    [linkTypes.soundcloud]: styles.soundcloudLink,
    [linkTypes.bandcamp]: styles.bandcampLink,
  };
  return (
    <Link href={link} legacyBehavior>
      <a className={`${styles.musicLink} ${linkClasses[linkType]}`}>
        {
          {
            [linkTypes.spotify]: <FontAwesomeIcon icon={faSpotify} />,
            [linkTypes.soundcloud]: <FontAwesomeIcon icon={faSoundcloud} />,
            [linkTypes.bandcamp]: <FontAwesomeIcon icon={faBandcamp} />,
          }[linkType]
        }
      </a>
    </Link>
  );
};

const SongCard = forwardRef(function SongCard(
  { albumArtSource, songTitle, externalLink, id, selectedTrack, onPlayPauseTrack, duration }: SongCardProps,
  scPlayer: any,
) {
  const [playButtonStyles, setPlayButtonStyles] = useState({ opacity: 0 });
  const [sliderStyles, setSliderStyles] = useState({ marginTop: -20 });
  const [timeDisplayStyles, setTimeDisplayStyles] = useState({ opacity: 0 });
  // Recorded in seconds
  const [playbackPosition, setPlaybackPosition] = useState(0);
  // Is song playing, paused, or loading
  const [songState, setSongState] = useState<SongState>(SongStates.PAUSED);

  // Show/hide the play button and time display on hover
  const onMouseEnterSongBox = () => {
    setPlayButtonStyles({ opacity: 1 });
    setSliderStyles({ marginTop: 0 });
    setTimeDisplayStyles({ opacity: 1 });
  };
  const onMouseLeaveSongBox = () => {
    setPlayButtonStyles({ opacity: 0 });
    setSliderStyles({ marginTop: -20 });
    setTimeDisplayStyles({ opacity: 0 });
  };

  const handleTogglePlaySong = () => {
    if (songState === SongStates.PLAYING) {
      onPlayPauseTrack("");
    } else {
      onPlayPauseTrack(id, playbackPosition);
    }
  };

  // When the selectedTrack changes, if it matches this song, update the state
  useEffect(() => {
    if (selectedTrack === id) {
      setSongState(SongStates.PLAYING);
    } else {
      setSongState(SongStates.PAUSED);
    }
  }, [selectedTrack, setSongState, id]);

  // When the PLAY_PROGRESS event occurs, update the slider
  useEffect(() => {
    if (typeof window !== "undefined" && window.SC) {
      // scPlayerCopy?.bind(window.SC.Widget.Events.PLAY_PROGRESS, (progress: any) => {
      //   console.log(progress);
      // });
    }
  }, []);

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
        width={240}
        height={240}
      />
      <div className={styles.playButton} style={playButtonStyles} onClick={handleTogglePlaySong}>
        <FontAwesomeIcon
          icon={
            { [SongStates.PAUSED]: faPlay, [SongStates.PLAYING]: faPause, [SongStates.LOADING]: faSpinner }[songState]
          }
          id={id}
          className={styles.playIcon}
        />
        <div className={styles.circleSlider}></div>
      </div>
      <Box className={styles.timeDisplay} sx={boxStyleOverrides} style={timeDisplayStyles}>
        <TinyText>{formatDuration(playbackPosition)}</TinyText>
        <TinyText>-{formatDuration(duration - playbackPosition)}</TinyText>
      </Box>
      <div className={styles.sliderContainer} style={sliderStyles}>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={playbackPosition}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPlaybackPosition(value as number)}
          className={styles.slider}
          sx={sliderStyleOverrides}
        />
      </div>
      <div className={styles.songCaption}>
        <Typography component="span" variant="body2" className={styles.songTitle}>
          {songTitle}
        </Typography>
        <IconLink linkType={externalLink.linkType} link={externalLink.link} />
      </div>
    </div>
  );
});

export default SongCard;

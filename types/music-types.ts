import { StaticImageData } from "next/image";

export interface ExternalSongLink {
  linkType: string;
  link: string;
}

export interface SongCardProps {
  albumArtSource: StaticImageData;
  songTitle: string;
  externalLink: ExternalSongLink;
  id: string;
  selectedTrack: string;
  onPlayPauseTrack: (trackId: string, startPositionMs?: number) => void;
  duration: number;
}

export interface Track {
  title: string;
  link: string;
  artworkSource: StaticImageData;
}

export enum SongStates {
  PLAYING = "playing",
  PAUSED = "paused",
  LOADING = "loading",
}

export type SongState = SongStates.PLAYING | SongStates.PAUSED | SongStates.LOADING;

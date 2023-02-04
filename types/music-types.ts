import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ExternalSongLink {
  linkType: string;
  link: string;
}

export interface SongCardProps {
  albumArtSource: StaticImageData;
  songTitle: string;
  externalLink: ExternalSongLink;
  scURL: string;
  selectedURL: string;
  setSelectedURL: Dispatch<SetStateAction<string>>;
  duration?: number; // seconds
  progress?: number; // seconds
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  seekTo: (position: number, type: "seconds" | "fraction") => void;
  isReady: boolean;
  setIsReady: Dispatch<SetStateAction<boolean>>;
  progressEventCounter: number;
  setProgressEventCounter: Dispatch<SetStateAction<number>>;
}

export interface Track {
  title: string;
  link: string;
  artworkSource: StaticImageData;
  // SoundCloud URL
  scURL: string;
}

export enum SongStates {
  PLAYING = "playing",
  PAUSED = "paused",
  LOADING = "loading",
}

export type SongState = SongStates.PLAYING | SongStates.PAUSED | SongStates.LOADING;

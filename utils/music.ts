import { Track } from "../types/music-types";

export const linkTypes = {
  spotify: "spotify",
  soundcloud: "soundcloud",
  bandcamp: "bandcamp",
};

export const getLinkType = (track: Track): string => {
  const { link } = track;
  if (link.startsWith("https://open.spotify.com")) {
    return linkTypes.spotify;
  } else if (link.startsWith("https://soundcloud.com")) {
    return linkTypes.soundcloud;
  } else if (link.includes("bandcamp.com")) {
    return linkTypes.bandcamp;
  }
  return "";
};

export const formatDuration = (seconds: number) => {
  const minute = Math.floor(seconds / 60);
  const secondLeft = Math.trunc(seconds - minute * 60);
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
};

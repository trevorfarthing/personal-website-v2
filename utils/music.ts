import {
  ShadesOfGreenImage,
  DaylightImage,
  WolvesImage,
  MementoImage,
  FetishImage,
  DMsImage,
  LastChanceImage,
  FeelingThisImage,
  MyOwnWorstEnemyImage,
  HeavyImage,
  DungeonImage,
  CompetitionMixImage,
  BoysOfSummerImage,
  PumpkinSpiceMixImage,
  ChillaxMixImage,
  ClocksImage,
  LostAtSeaImage,
  HandsOfFoolsImage,
  SonanceImage,
} from "../public/album_artwork/index";
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

// TODO: Move this to a DB and file storage for images. Also remove some tracks and add newer ones.
export const trackList: Track[] = [
  {
    title: "Puzzle Pieces",
    link: "https://open.spotify.com/artist/7ep0M30TYlHUVnJsDwiLGe?si=7pgd7m8ERMyG1zImlQ7cTA",
    artworkSource: ShadesOfGreenImage,
  },
  {
    title: "Fly Away",
    link: "https://open.spotify.com/artist/7ep0M30TYlHUVnJsDwiLGe?si=7pgd7m8ERMyG1zImlQ7cTA",
    artworkSource: ShadesOfGreenImage,
  },
  {
    title: "Dawn",
    link: "https://open.spotify.com/artist/7ep0M30TYlHUVnJsDwiLGe?si=7pgd7m8ERMyG1zImlQ7cTA",
    artworkSource: ShadesOfGreenImage,
  },
  {
    title: "Daylight",
    link: "https://soundcloud.com/tfar/daylight",
    artworkSource: DaylightImage,
  },
  {
    title: "Wolves (Remix)",
    link: "https://soundcloud.com/tfar/selena-gomez-x-marshmello-wolves-nerves-remix",
    artworkSource: WolvesImage,
  },
  {
    title: "Memento",
    link: "https://soundcloud.com/tfar/memento",
    artworkSource: MementoImage,
  },
  {
    title: "Fetish (Remix)",
    link: "https://soundcloud.com/tfar/selena-gomez-fetish-nerves-remix",
    artworkSource: FetishImage,
  },
  {
    title: "DMs (#SELFIE Pt. II)",
    link: "https://soundcloud.com/tfar/dms-selfie-pt-ii",
    artworkSource: DMsImage,
  },
  {
    title: "Kaskade x T. Swift Mashup",
    link: "https://soundcloud.com/nerves_music/i-knew-you-were-trouble-last-chance-taylor-swift-x-kaskade-mashup",
    artworkSource: LastChanceImage,
  },
  {
    title: "Feeling This (Remix)",
    link: "https://soundcloud.com/tfar/feeling-this-intro",
    artworkSource: FeelingThisImage,
  },
  {
    title: "My Own Worst Enemy (Remix)",
    link: "https://soundcloud.com/tfar/lit-my-own-worst-enemy-nerves-remix-1",
    artworkSource: MyOwnWorstEnemyImage,
  },
  {
    title: "Heavy (Remix)",
    link: "https://soundcloud.com/nerves_music/linkin-park-ft-kiiara-heavy-frt-strs-remix",
    artworkSource: HeavyImage,
  },
  {
    title: "Welcome to the Dungeon",
    link: "https://soundcloud.com/nerves_music/welcome-to-the-dungeon-mini-mix",
    artworkSource: DungeonImage,
  },
  {
    title: "2017 Competition Mix",
    link: "https://soundcloud.com/nerves_music/2017-competition-mix",
    artworkSource: CompetitionMixImage,
  },
  {
    title: "Boys of Summer (Remix)",
    link: "https://soundcloud.com/tfar/don-henley-x-bell-x1-the-boys-of-summer-tfar-remix-1",
    artworkSource: BoysOfSummerImage,
  },
  {
    title: "Fall '16 Pumpkin Spice Mix",
    link: "https://soundcloud.com/tfar/fall-2016-pumpkin-spice-mix",
    artworkSource: PumpkinSpiceMixImage,
  },
  {
    title: "Summer '16 Chillax Mix",
    link: "https://soundcloud.com/tfar/summer-2016-chillax-mix",
    artworkSource: ChillaxMixImage,
  },
  {
    title: "Clocks (Remix)",
    link: "https://soundcloud.com/tfar/clocks-coldplay-t-far-house-remix",
    artworkSource: ClocksImage,
  },
  {
    title: "The Sun",
    link: "https://struckred.bandcamp.com/album/hands-of-fools-ep",
    artworkSource: HandsOfFoolsImage,
  },
  {
    title: "Hands of Fools",
    link: "https://struckred.bandcamp.com/album/hands-of-fools-ep",
    artworkSource: HandsOfFoolsImage,
  },
  {
    title: "Damaging",
    link: "https://struckred.bandcamp.com/album/lost-at-sea-ep",
    artworkSource: LostAtSeaImage,
  },
  {
    title: "Lost at Sea",
    link: "https://struckred.bandcamp.com/album/lost-at-sea-ep",
    artworkSource: LostAtSeaImage,
  },
  {
    title: "She Was Mine (Cover)",
    link: "https://sonanceband.bandcamp.com",
    artworkSource: SonanceImage,
  },
  {
    title: "Sweater Weather (Cover)",
    link: "https://sonanceband.bandcamp.com",
    artworkSource: SonanceImage,
  },
];

export const formatDuration = (ms: number) => {
  const seconds = ms / 1000;
  const minute = Math.floor(seconds / 60);
  const secondLeft = Math.trunc(seconds - minute * 60);
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
};

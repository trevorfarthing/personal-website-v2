import { Track } from "../types/music-types";
import ShadesOfGreenImage from "../public/album_artwork/shades_of_green.jpg";
import DaylightImage from "../public/album_artwork/daylight.jpg";
import WolvesImage from "../public/album_artwork/wolves.jpg";
import MementoImage from "../public/album_artwork/memento.jpg";
import FetishImage from "../public/album_artwork/fetish.jpg";
import DMsImage from "../public/album_artwork/dms.jpg";
import LastChanceImage from "../public/album_artwork/lastchance.jpg";
import FeelingThisImage from "../public/album_artwork/feeling_this.jpg";
import MyOwnWorstEnemyImage from "../public/album_artwork/my_own_worst_enemy.jpg";
import HeavyImage from "../public/album_artwork/heavy.jpg";
import DungeonImage from "../public/album_artwork/dungeon.jpeg";
import CompetitionMixImage from "../public/album_artwork/competition_mix.jpg";
import BoysOfSummerImage from "../public/album_artwork/boys_of_summer.jpeg";
import PumpkinSpiceMixImage from "../public/album_artwork/pumpkin_spice_mix.jpg";
import ChillaxMixImage from "../public/album_artwork/chillax_mix.jpg";
import ClocksImage from "../public/album_artwork/clocks.jpg";
import LostAtSeaImage from "../public/album_artwork/lost_at_sea.jpg";
import HandsOfFoolsImage from "../public/album_artwork/hands_of_fools.jpg";
import SonanceImage from "../public/album_artwork/sonance.jpg";

// TODO: Move this to a DB and file storage for images. Also remove some tracks and add newer ones.
export const trackList: Track[] = [
  {
    title: "Puzzle Pieces",
    link: "https://open.spotify.com/artist/7ep0M30TYlHUVnJsDwiLGe?si=7pgd7m8ERMyG1zImlQ7cTA",
    artworkSource: ShadesOfGreenImage,
    scURL: "https://soundcloud.com/tfar/puzzle-pieces",
  },
  {
    title: "Fly Away",
    link: "https://open.spotify.com/artist/7ep0M30TYlHUVnJsDwiLGe?si=7pgd7m8ERMyG1zImlQ7cTA",
    artworkSource: ShadesOfGreenImage,
    scURL: "https://soundcloud.com/tfar/fly-away",
  },
  {
    title: "Dawn",
    link: "https://open.spotify.com/artist/7ep0M30TYlHUVnJsDwiLGe?si=7pgd7m8ERMyG1zImlQ7cTA",
    artworkSource: ShadesOfGreenImage,
    scURL: "https://soundcloud.com/tfar/dawn",
  },
  {
    title: "Daylight",
    link: "https://soundcloud.com/tfar/daylight",
    artworkSource: "/album_artwork/daylight.jpg",
    scURL: "https://soundcloud.com/tfar/daylight",
  },
  {
    title: "Wolves (Remix)",
    link: "https://soundcloud.com/tfar/selena-gomez-x-marshmello-wolves-nerves-remix",
    artworkSource: WolvesImage.src,
    scURL: "https://soundcloud.com/tfar/selena-gomez-x-marshmello-wolves-nerves-remix",
  },
  {
    title: "Memento",
    link: "https://soundcloud.com/tfar/memento",
    artworkSource: MementoImage,
    scURL: "https://soundcloud.com/tfar/memento",
  },
  {
    title: "Fetish (Remix)",
    link: "https://soundcloud.com/tfar/selena-gomez-fetish-nerves-remix",
    artworkSource: FetishImage,
    scURL: "https://soundcloud.com/tfar/selena-gomez-fetish-nerves-remix",
  },
  {
    title: "DMs (#SELFIE Pt. II)",
    link: "https://soundcloud.com/tfar/dms-selfie-pt-ii",
    artworkSource: DMsImage,
    scURL: "https://soundcloud.com/tfar/dms-selfie-pt-ii",
  },
  {
    title: "Kaskade x T. Swift Mashup",
    link: "https://soundcloud.com/nerves_music/i-knew-you-were-trouble-last-chance-taylor-swift-x-kaskade-mashup",
    artworkSource: LastChanceImage,
    scURL: "https://soundcloud.com/nerves_music/i-knew-you-were-trouble-last-chance-taylor-swift-x-kaskade-mashup",
  },
  {
    title: "Feeling This (Remix)",
    link: "https://soundcloud.com/tfar/feeling-this-intro",
    artworkSource: FeelingThisImage,
    scURL: "https://soundcloud.com/tfar/feeling-this-intro",
  },
  {
    title: "My Own Worst Enemy (Remix)",
    link: "https://soundcloud.com/tfar/lit-my-own-worst-enemy-nerves-remix-1",
    artworkSource: MyOwnWorstEnemyImage,
    scURL: "https://soundcloud.com/tfar/lit-my-own-worst-enemy-nerves-remix-1",
  },
  {
    title: "Heavy (Remix)",
    link: "https://soundcloud.com/nerves_music/linkin-park-ft-kiiara-heavy-frt-strs-remix",
    artworkSource: HeavyImage,
    scURL: "https://soundcloud.com/nerves_music/linkin-park-ft-kiiara-heavy-frt-strs-remix",
  },
  {
    title: "Welcome to the Dungeon",
    link: "https://soundcloud.com/nerves_music/welcome-to-the-dungeon-mini-mix",
    artworkSource: DungeonImage,
    scURL: "https://soundcloud.com/nerves_music/welcome-to-the-dungeon-mini-mix",
  },
  {
    title: "2017 Competition Mix",
    link: "https://soundcloud.com/nerves_music/2017-competition-mix",
    artworkSource: CompetitionMixImage,
    scURL: "https://soundcloud.com/nerves_music/2017-competition-mix",
  },
  {
    title: "Boys of Summer (Remix)",
    link: "https://soundcloud.com/tfar/don-henley-x-bell-x1-the-boys-of-summer-tfar-remix",
    artworkSource: BoysOfSummerImage,
    scURL: "https://soundcloud.com/tfar/don-henley-x-bell-x1-the-boys-of-summer-tfar-remix",
  },
  {
    title: "Fall '16 Pumpkin Spice Mix",
    link: "https://soundcloud.com/tfar/fall-2016-pumpkin-spice-mix",
    artworkSource: PumpkinSpiceMixImage,
    scURL: "https://soundcloud.com/tfar/fall-2016-pumpkin-spice-mix",
  },
  {
    title: "Summer '16 Chillax Mix",
    link: "https://soundcloud.com/tfar/summer-2016-chillax-mix",
    artworkSource: ChillaxMixImage,
    scURL: "https://soundcloud.com/tfar/summer-2016-chillax-mix",
  },
  {
    title: "Clocks (Remix)",
    link: "https://soundcloud.com/tfar/clocks-coldplay-t-far-house-remix",
    artworkSource: ClocksImage,
    scURL: "https://soundcloud.com/tfar/clocks-coldplay-t-far-house-remix",
  },
  {
    title: "The Sun",
    link: "https://struckred.bandcamp.com/album/hands-of-fools-ep",
    artworkSource: HandsOfFoolsImage,
    scURL: "https://soundcloud.com/tfar/struck-red-the-sun",
  },
  {
    title: "Hands of Fools",
    link: "https://struckred.bandcamp.com/album/hands-of-fools-ep",
    artworkSource: HandsOfFoolsImage,
    scURL: "https://soundcloud.com/tfar/struck-red-hands-of-fools",
  },
  {
    title: "Damaging",
    link: "https://struckred.bandcamp.com/album/lost-at-sea-ep",
    artworkSource: LostAtSeaImage,
    scURL: "https://soundcloud.com/tfar/struck-red-damaging",
  },
  {
    title: "Lost at Sea",
    link: "https://struckred.bandcamp.com/album/lost-at-sea-ep",
    artworkSource: LostAtSeaImage,
    scURL: "https://soundcloud.com/tfar/struck-red-lost-at-sea",
  },
  {
    title: "She Was Mine (Cover)",
    link: "https://sonanceband.bandcamp.com",
    artworkSource: SonanceImage,
    scURL: "https://soundcloud.com/tfar/she-was-mine-cover",
  },
  {
    title: "Sweater Weather (Cover)",
    link: "https://sonanceband.bandcamp.com",
    artworkSource: SonanceImage,
    scURL: "https://soundcloud.com/tfar/sweater-weather-cover",
  },
];

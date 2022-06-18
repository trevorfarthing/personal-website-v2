import Link from "next/link";
import styles from "./SongCard.module.scss";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faSoundcloud, faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { linkTypes } from "../../utils/music";

interface ExternalSongLink {
  linkType: string;
  link: string;
}

interface SongCardProps {
  albumArtSource: StaticImageData;
  songTitle: string;
  externalLink: ExternalSongLink;
  id: string;
}

const IconLink = ({ linkType, link }: { linkType: string; link: string }) => {
  const linkClasses = {
    [linkTypes.spotify]: styles.spotifyLink,
    [linkTypes.soundcloud]: styles.soundcloudLink,
    [linkTypes.bandcamp]: styles.bandcampLink,
  };
  return (
    <Link href={link}>
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

const SongCard = ({ albumArtSource, songTitle, externalLink, id }: SongCardProps) => {
  return (
    <div className={styles.songBox}>
      <Image className={styles.albumArt} alt={`Album artwork for the song ${songTitle}`} src={albumArtSource} />
      <div className={styles.playButton}>
        <FontAwesomeIcon icon={faPlay} id={id} className={styles.playIcon} />
        <div className={styles.circleSlider}></div>
      </div>
      <div className={styles.songCaption}>
        <span className={styles.songTitle}>{songTitle}</span>
        <IconLink linkType={externalLink.linkType} link={externalLink.link} />
      </div>
    </div>
  );
};

export default SongCard;

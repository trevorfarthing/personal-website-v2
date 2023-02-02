import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { linkTypes } from "../../utils/music";
import { faSpotify, faSoundcloud, faBandcamp } from "@fortawesome/free-brands-svg-icons";
import styles from "./SongIconLink.module.scss";

const SongIconLink = ({ linkType, link }: { linkType: string; link: string }) => {
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
export default SongIconLink;

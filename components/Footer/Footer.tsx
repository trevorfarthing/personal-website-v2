import Link from "next/link";
import styles from "./Footer.module.scss";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const links = {
    email: "mailto:trevordfarthing@gmail.com",
    linkedIn: "https://www.linkedin.com/in/trevor-farthing-6a9820108",
    facebook: "https://www.facebook.com/trevor.farthing",
    instagram: "https://instagram.com/trevor_farthing",
    youTube: "https://www.youtube.com/user/tfavre",
  };
  const footerClass = styles.footer; //router.pathname === "/" ? styles.fixedFooter : styles.footer;

  return (
    <footer className={footerClass}>
      <Link href={links.email} legacyBehavior>
        <a className={styles.footerLink}>Mail</a>
      </Link>
      <span className={styles.bullet}>&bull;</span>
      <Link href={links.linkedIn} legacyBehavior>
        <a className={styles.footerLink}>LinkedIn</a>
      </Link>
      <span className={styles.bullet}>&bull;</span>
      <Link href={links.facebook} legacyBehavior>
        <a className={styles.footerLink}>Facebook</a>
      </Link>
      <span className={styles.bullet}>&bull;</span>
      <Link href={links.instagram} legacyBehavior>
        <a className={styles.footerLink}>Instagram</a>
      </Link>
    </footer>
  );
};

export default Footer;

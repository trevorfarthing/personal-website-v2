import Link from "next/link";
import { Grid } from "@mui/material";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link href="/" legacyBehavior>
        <a className={styles.homeLink}>~ TF ~</a>
      </Link>
      <Grid container spacing={5} justifyContent="flex-end">
        <Grid item>
          <Link href="/about" legacyBehavior>
            <a className={styles.navLink}>About</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/work" legacyBehavior>
            <a className={styles.navLink}>Work</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/music" legacyBehavior>
            <a className={styles.navLink}>Music</a>
          </Link>
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavBar;

import Link from "next/link";
import { Grid } from "@mui/material";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <a className={styles.homeLink}>~ TF ~</a>
      </Link>
      <Grid container spacing={5} justifyContent="flex-end">
        <Grid item>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/work">
            <a className={styles.navLink}>Work</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/music">
            <a className={styles.navLink}>Music</a>
          </Link>
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavBar;

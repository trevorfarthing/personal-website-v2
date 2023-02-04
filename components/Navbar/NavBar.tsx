import Link from "next/link";
import { Grid, Menu, MenuItem, Typography } from "@mui/material";
import styles from "./Navbar.module.scss";
import { useState } from "react";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuStyleOverrides = {
    "& .MuiPaper-root": {
      background: "transparent",
      boxShadow: "none",
      borderRight: "1px solid black",
      borderRadius: 0,
    },
  };

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
          <Typography className={`${styles.navLink} ${styles.musicLink}`} onClick={handleClick}>
            Music
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={menuStyleOverrides}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/music" legacyBehavior>
                <a className={styles.navLink}>- Songs</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/videos" legacyBehavior>
                <a className={styles.navLink}>- Videos</a>
              </Link>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavBar;

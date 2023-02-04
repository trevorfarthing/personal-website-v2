// import { Grid } from "@mui/material";
import styles from "./WorkSection.module.scss";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Collapse, Divider, Fade, Grid, Grow, Typography } from "@mui/material";

const transitionTimeout = 1500;
const transitionDelay = 250;

const WorkSection = ({
  sectionTitle,
  images,
  sectionContent,
}: {
  sectionTitle: string;
  images: StaticImageData[] | string[];
  sectionContent: React.ReactNode;
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsCollapsed(false);
    }, 1000);
  }, []);

  return (
    <section>
      <div className={styles.projSectionInfo}>
        <Grid container className={styles.projectPhotos}>
          {images.map((image, index) => (
            <Grow
              in={true}
              timeout={transitionTimeout}
              style={{ transitionDelay: `${index * transitionDelay}ms` }}
              key={index}
            >
              <Grid item xs={4} className={styles.imageContainerWrapper}>
                <div className={styles.imageContainer}>
                  <Image src={image} alt="Work image" className={styles.projectPhoto} fill />
                </div>
              </Grid>
            </Grow>
          ))}
        </Grid>
        <Fade in={true} timeout={transitionTimeout}>
          <div>
            <Typography variant="h4" className={styles.projSectionTitle}>
              {sectionTitle}
            </Typography>
            <Divider variant="fullWidth" className={styles.secondaryDivider} />
          </div>
        </Fade>
        <Collapse in={!isCollapsed} timeout={transitionTimeout}>
          <div>
            <Typography variant="body1" className={styles.projectContent} component="div">
              {sectionContent}
            </Typography>
          </div>
        </Collapse>
      </div>
    </section>
  );
};

export default WorkSection;

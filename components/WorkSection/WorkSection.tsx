// import { Grid } from "@mui/material";
import styles from "./WorkSection.module.scss";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Divider, Typography } from "@mui/material";

const WorkSection = ({
  sectionTitle,
  images,
  sectionContent,
}: {
  sectionTitle: string;
  images: StaticImageData[];
  sectionContent: React.ReactNode;
}) => {
  return (
    <section>
      <div className={styles.projSectionInfo}>
        <div className={styles.projectPhotos}>
          {images.map((image, index) => (
            <div className={styles.imageContainer} key={index}>
              <Image src={image} alt="Work image" className={styles.projectPhoto} fill />
            </div>
          ))}
        </div>
        <Typography variant="h4" className={styles.projSectionTitle}>
          {sectionTitle}
        </Typography>
        <Divider variant="fullWidth" className={styles.secondaryDivider} />
        <Typography variant="body1" className={styles.projectContent} component="div">
          {sectionContent}
        </Typography>
      </div>
    </section>
  );
};

export default WorkSection;

// import { Grid } from "@mui/material";
import styles from "./Skills.module.scss";
import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import {
  faAws,
  faBootstrap,
  faCss3,
  faDocker,
  faGit,
  faGoogle,
  faGulp,
  faHtml5,
  faJava,
  faJs,
  faMicrosoft,
  faNodeJs,
  faNpm,
  faPython,
  faReact,
  faVuejs,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faDatabase,
  faCaretSquareUp,
  faG,
  faList,
  faFileCode,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { title: "Javascript", icon: faJs },
  { title: "React.js", icon: faReact },
  { title: "AWS", icon: faAws },
  { title: "HTML/CSS", icon: faHtml5 },
  { title: "Vue.js", icon: faVuejs },
  { title: "Azure", icon: faMicrosoft },
  // { title: "CSS", icon: faCss3 },
  { title: "Next.js", icon: faCaretSquareUp },
  // { title: "Swagger / OpenAPI", icon: faBook },
  { title: "C#", icon: faMicrosoft },
  // { title: "Java", icon: faJava },
  { title: "npm", icon: faNpm },
  { title: "Python", icon: faPython },
  { title: "Gatsby", icon: faG },
  // { title: "Yarn", icon: faYarn },
  { title: "SQL", icon: faDatabase },
  { title: "Node.js", icon: faNodeJs },
  { title: "REST", icon: faList },
  // { title: "Gulp", icon: faGulp },
  // { title: "Bootstrap", icon: faBootstrap },
  // { title: "Material UI", icon: faGoogle },
  { title: "PostgreSQL", icon: faDatabase },
  { title: "Docker", icon: faDocker },
  { title: "Create React App", icon: faReact },
  { title: "Redis", icon: faShapes },
  // { title: "Git", icon: faGit },
  // { title: "C++", icon: faFileCode },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <Typography variant="h6" className={styles.sectionTitle}>
        - Technical Skills -
      </Typography>
      <Divider variant="fullWidth" className={styles.secondaryDivider} />
      <Grid container spacing={3} className={styles.skillsGridContainer}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} key={index}>
            <>{<FontAwesomeIcon icon={skill.icon as any} className={styles.icon} />}</>
            <Typography variant="body1" component="span">
              {skill.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;

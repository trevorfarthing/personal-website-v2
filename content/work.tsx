import { StaticImageData } from "next/image";
import styles from "../styles/base.module.scss";
import React from "react";
import {
  CLabsLogoCircleImage,
  GermanyCircleImage,
  GuitarCircleImage,
  HSFLogoCircleImage,
  InterCodesLogoCircleImage,
  InterCodesTeamCircleImage,
  InterCodesTeamCircleImage2,
  NervesCircleImage,
  ProfessionalCircleImage,
  ShadesOfGreenCircleImage,
  SpaceflightLogoCircleImage,
  ValenceLogoCircleImage,
} from "../public/work_images/index";

interface WorkSection {
  title: string;
  images: StaticImageData[];
  content: React.ReactNode;
}

// Content that will be displayed on the /work page.
export const workSections: WorkSection[] = [
  {
    title: "Valence",
    images: [SpaceflightLogoCircleImage, ValenceLogoCircleImage, HSFLogoCircleImage],
    content: (
      <div>
        A little less than a year into the pandemic in 2020, I took on a new position as a Software Engineer at Valence,
        a digital strategy, design, and engineering firm. Here I embraced new responsibilities, working as a fullstack
        developer with numerous clients ranging from Providence Health & Services to Spaceflight.
        <br />
        <br />I led the frontend development for Spaceflight&apos;s new Mission Control web application, an
        all-encompassing tool for mission managers to help prepare customers wishing to launch a satellite on a rocket
        owned by SpaceX (or another manufacturer). While I built the UI components using React, I also contributed to
        the construction of API endpoints with AWS Lambdas and CloudFormation. Read more about this project{" "}
        <a href="https://valencelevel.com/case-studies/spaceflight-mission-control/" className={styles.inlineLink}>
          here
        </a>
        .
        <br />
        <br />
        My most recent work at Valence involved the improvement of <i>Prosper</i>, a platform utilized by the Hispanic
        Scholarship Fund (HSF) and Cheech Marin, among others, to help support students and provide scholarships. Using
        React, node.js, SQL, and everything in between, I eliminated a plethora of bugs, helping to stabilize the
        overall system. I also repaired and completed the implementation of their real-time chat and Canvas integration,
        two primary features that were formerly unmaintained. Check out HSF{" "}
        <a href="https://www.hsf.net/" className={styles.inlineLink}>
          here
        </a>
        .
      </div>
    ),
  },
  {
    title: "C-Labs",
    images: [GermanyCircleImage, CLabsLogoCircleImage, ProfessionalCircleImage],
    content: (
      <div>
        I began working at C-Labs as a software development intern during the summer of 2016. After my graduation in
        2018, I accepted a full time role with the company and helped develop solutions for their then parent company
        TRUMPF, one of the world&apos;s largest providers of machine tools.
        <br />
        <br />
        Much of my experience involved creating plugins in C# for the C-DEngine, C-Labs&apos; state-of-the-art
        &quot;real&quot; industrial IoT service. Over the course of my two full-time years with C-Labs, I enhanced their
        software&apos;s storage capabilities, creating ways to store application data in databases such as SQL Server,
        Oracle, and InfluxDB. My contributions also included testing and improving their pub-sub messaging system
        through a Docker test framework and writing comprehensive documentation on various C-DEngine developer topics.
        <br />
        <br />I even received the opportunity to represent C-Labs internationally at Hannover Messe in Germany, one of
        the largest industrial-technology trade conventions in the world. See what C-Labs is up to{" "}
        <a href="https://www.c-labs.com/index.html" className={styles.inlineLink}>
          here
        </a>{" "}
        and try out their (newly open-source) software that I contributed to{" "}
        <a href="https://github.com/TRUMPF-IoT/C-DEngine" className={styles.inlineLink}>
          here
        </a>
        .
      </div>
    ),
  },
  {
    title: "Inter.Codes",
    images: [InterCodesTeamCircleImage, InterCodesLogoCircleImage, InterCodesTeamCircleImage2],
    content: (
      <div>
        At the beginning of September 2017, I began working with three other developers on Inter.Codes, our
        senior-design project at Gonzaga University. Inter.Codes is a platform established by a small company named
        Liquid Crystal Studios, and seeks to serve as an all-in-one solution for software developers. It is a
        cloud-based development environment, version control system, and project management suite that aims to produce
        collaboration and visibility into all aspects of the development process.
        <br />
        <br />
        As part of the LCS team, I focused primarily on frontend design and development in Vue.js, building the
        components of the UI and interaction with our backend API. After graduation, I took on a larger role as
        Secretary of Inter.Codes LLC while continuing to contribute to the development of the user interface. Although
        we are currently in the process of revamping the site, check out our progress{" "}
        <a className={styles.inlineLink} href="http://dev.inter.codes">
          here
        </a>
        .
      </div>
    ),
  },
  {
    title: "Music & Video",
    images: [NervesCircleImage, GuitarCircleImage, ShadesOfGreenCircleImage],
    content: (
      <div>
        Since I was young, I&apos;ve always had a passion for filming and editing video, as well as producing music. In
        high school, I played guitar in various bands and later learned how to produce music electronically in DAWs
        (Digital Audio Workstations) such as Logic, Ableton Live, and Pro Tools.
        <br />
        <br />
        During the past couple of years, I&apos;ve produced music under the name &quot;T.FAR&quot; on SoundCloud as well
        as a DJ/Producer duo with my good friend Will Miner called &quot;NERVES&quot;. We&apos;ve performed at several
        venues around the Spokane, Washington area, including a theatre festival with a crowd of over 500 people. Our
        tracks have been played thousands of times on SoundCloud, with our most popular reaching 16k. Check out NERVES{" "}
        <a className={styles.inlineLink} href="https://soundcloud.com/nerves_music">
          here
        </a>
        .
        <br />
        <br />
        More recently, I completed a full length album titled &quot;Transitions&quot; along with my friend and fellow
        musician Kirk Roa. We spent the course of a year recording, editing, mixing, and mastering 8 different songs
        that comprise genres such as rock, blues, jazz, electronic, and acoustic. Listen to our album{" "}
        <a
          className={styles.inlineLink}
          href="https://open.spotify.com/album/0VBnoK0Ecq29VBjGpOj4sd?si=n5PxHdIcQdqnlKG14EXhRQ"
        >
          here
        </a>
        .
        <br />
        <br />
        In addition to solely producing music, I&apos;ve filmed and edited a collection of guitar covers on YouTube,
        with one of my videos grossing 30,000 views. Check out my channel{" "}
        <a className={styles.inlineLink} href="https://www.youtube.com/user/tfavre">
          here
        </a>
        .
      </div>
    ),
  },
];

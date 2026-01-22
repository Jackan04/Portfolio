import { Link } from "react-router-dom";
import styles from "../components/Home/Home.module.css";
import profile from "../assets/images/profile.jpeg";
import SocialCard from "../components/LinkCard/LinkCard";
import CreativeCard from "../components/CreativeCard/CreativeCard";
import MailIcon from "../assets/icons/envelope.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import FileIcon from "../assets/icons/file.svg?react";
import GitHubIcon from "../assets/icons/github.svg?react";
import UnsplashIcon from "../assets/icons/unsplash.svg?react";

export default function Home() {
  return (
    <main>
      <div className={styles.content}>
        <div></div>
        <div className={styles.contentTop}>
          <img
            className={styles.profileImage}
            src={profile}
            alt="Profile Image"
            loading="lazy"
          />

          <h2 className={styles.heading}>Hey, I’m Jacob</h2>
          <p className={styles.welcomeText}>
            I'm an Informatics student from Sweden who loves building things
            with code and design. When I’m not at the keyboard, you’ll usually
            find me hiking with friends, lifting at the gym, or behind a camera.
            Take a look at some of my{" "}
            <Link to="/projects" className="inlineLink">
              projects
            </Link>
            .
          </p>
        </div>

        <div className={styles.creativeContainer}>
          <h2 className={styles.heading}>Across the Web</h2>
          <CreativeCard
            href="https://unsplash.com/@jacobasker04"
            icon={<UnsplashIcon className={styles.iconCreative} />}
            title="Unsplash"
          ></CreativeCard>
          <CreativeCard
            href="https://github.com/Jackan04?tab=repositories"
            icon={<GitHubIcon className={styles.iconCreative} />}
            title="GitHub"
          ></CreativeCard>
        </div>

        <div className={styles.linksContainer}>
          <h2 className={styles.heading}>Elsewhere</h2>
          <div className={styles.linkCards}>
            <SocialCard
              icon={<MailIcon className={styles.icon} />}
              title="Email"
              href="mailto: jacob.asker@icloud.com"
            ></SocialCard>
            <SocialCard
              icon={<LinkedInIcon className={styles.icon} />}
              title="LinkedIn"
              href="https://www.linkedin.com/in/jacob-asker-a096a7352/"
            ></SocialCard>
            <SocialCard
              icon={<FileIcon className={styles.icon} />}
              title="Resume"
              href="/resume.pdf"
            ></SocialCard>
          </div>
        </div>
      </div>
    </main>
  );
}

import styles from '../components/Home/Home.module.css'
import profile from '../assets/images/profile.jpeg'
import SocialCard from '../components/SocialCard/LinkCard'
import MailIcon from '../assets/icons/envelope.svg?react'
import TwitterIcon from '../assets/icons/twitter.svg?react'
import LinkedInIcon from '../assets/icons/linkedin.svg?react'
import FileIcon from '../assets/icons/file.svg?react'

export default function Home(){
    
    return(
        <main>
            <div>
            <img className={styles.profileImage} src={profile} alt="Profile Image" />
            <h1 className={`${styles.heading} heading`}>Hi, I’m Jacob</h1>
            <p>I’m an Informatics student at Högskolan Väst in Sweden, fascinated by consumer tech, software development, and design. Outside of tech, I’m into cars, strength training, photography, and creative side projects.</p>
            </div>

            <div className={styles.linksContainer}>

            <h2 className={styles.linksHeading}>Links</h2>
            <div className={styles.linkCards}>
            <SocialCard icon={<MailIcon className={styles.icon}/>} title="Mail" href="mailto: jacob.asker@icloud.com"></SocialCard>
            <SocialCard icon={<FileIcon className={styles.icon}/>} title="Resume"></SocialCard>
            <SocialCard icon={<LinkedInIcon className={styles.icon}/>} title="LinkedIn" href="https://www.linkedin.com/in/jacob-asker-a096a7352/"></SocialCard>
            <SocialCard icon={<TwitterIcon className={styles.icon}/>} title="X" href="https://x.com/jacob_aske15923"></SocialCard>
            </div>
            </div>

        </main>


    )
}
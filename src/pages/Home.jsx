import styles from '../components/Home/Home.module.css'
import profile from '../assets/images/profile.jpeg'
import SocialCard from '../components/LinkCard/LinkCard'
import CreativeCard from '../components/CreativeCard/CreativeCard'
import MailIcon from '../assets/icons/envelope.svg?react'
import TwitterIcon from '../assets/icons/twitter.svg?react'
import LinkedInIcon from '../assets/icons/linkedin.svg?react'
import FileIcon from '../assets/icons/file.svg?react'
import GitHubIcon from '../assets/icons/github.svg?react'
import MediumIcon from '../assets/icons/medium.svg?react'
import UnsplashIcon from '../assets/icons/unsplash.svg?react'

export default function Home(){
    
    return(
        <main>
            <div className={styles.content}>
                <div>

                </div>
                    <div className={styles.contentTop}>
                        <img className={styles.profileImage} src={profile} alt="Profile Image" />
                        <h1 className={styles.heading}>Hi, I’m Jacob</h1>
                        <p className={styles.welcomeText}>I’m an Informatics student at Högskolan Väst in Sweden, fascinated by consumer tech, software development, and design. Outside of tech, I’m into cars, strength training, photography, and creative side projects.</p>
                    </div>

                    <div className={styles.creativeContainer}>
                        <h2 className={styles.heading}>Across the Web</h2>
                    <CreativeCard href="https://unsplash.com/@jacobasker04" icon={<UnsplashIcon className={styles.iconCreative}/>} title="Unsplash" description="Where I showcase my photography"></CreativeCard>
                    <CreativeCard href="https://github.com/Jackan04?tab=repositories" icon={<GitHubIcon className={styles.iconCreative}/>} title="GitHub" description="My past and ongoing coding projects"></CreativeCard>
                    <CreativeCard href="https://medium.com/@jacobasker" icon={<MediumIcon className={styles.iconCreative}/>} title="Medium" description="I sometimes write about stuff I find interesting"></CreativeCard>
                    </div>
                    
                    
                    <div className={styles.linksContainer}>
                        <h2 className={styles.heading}>Links</h2>
                        <div className={styles.linkCards}>
                        <SocialCard icon={<MailIcon className={styles.icon}/>} title="Mail" href="mailto: jacob.asker@icloud.com"></SocialCard>
                        <SocialCard icon={<FileIcon className={styles.icon}/>} title="Resume"></SocialCard>
                        <SocialCard icon={<LinkedInIcon className={styles.icon}/>} title="LinkedIn" href="https://www.linkedin.com/in/jacob-asker-a096a7352/"></SocialCard>
                        <SocialCard icon={<TwitterIcon className={styles.icon}/>} title="X" href="https://x.com/jacob_aske15923"></SocialCard>
                    </div>
                </div>
            </div>
        </main>
    )
}


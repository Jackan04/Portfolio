import styles from '../components/Home/Home.module.css'
import profile from '../assets/images/profile.jpeg'

export default function Home(){
    
    return(
        <main>
            <div>
            <img className={styles.profileImage} src={profile} alt="Profile Image" />
            <h1 className={`${styles.heading} heading`}>Hi, I’m Jacob</h1>
            <p>I’m an Informatics student at Högskolan Väst in Sweden, fascinated by consumer tech, software development, and design. Outside of tech, I’m into cars, strength training, photography, and creative side projects.</p>
            </div>

        </main>


    )
}
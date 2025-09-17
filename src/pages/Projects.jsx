import { useState } from "react"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import styles from '../components/ProjectCard/ProjectCard.module.css'
import TaskManagerImage from '../assets/images/task-manager.jpeg'
import DesignCaseImage from '../assets/images/design-case.png'

export default function Projects(){
    const categories = ["Coding", "Design"]
    const [filter, setFilter] = useState(null);

    const allCards = [
        {
            category: "Design",
            src: DesignCaseImage,
            href: "https://www.linkedin.com/pulse/designcase-förbättring-av-självbetjäningskassa-jacob-asker-hva4e/?trackingId=T%2BxvKZHHRFeXrygYROiDBg%3D%3D",
            title: "Redesign of Self-Checkout",
            description: "Suggested improvements for a self-service checkout screen based on observed usability issues, aiming to make it more intuitive and reduce errors for first-time users."
            },
            {
            category: "Coding",
            src: TaskManagerImage,
            href: "https://github.com/Jackan04/Task-Manager",
            title: "Task Manager",
            description: "A simple, modern task management app built using vanilla JavaScript, HTML, and CSS. All data is stored locally in your browser using localStorage, ensuring privacy and persistence across sessions."
            },
    ]
       
    function filterProjects(category){
        setFilter(category);
    }

    let visibleCards = filter ? allCards.filter(card => card.category === filter) : allCards;

    return(
    <main>
        <div className={styles.projectFilters}>
        <button className={`${styles.filterButton} ${styles.button}`} onClick={() => filterProjects(null)}>All</button>
        {categories.map(category => <button className={styles.filterButton} key={category} onClick={() => filterProjects(category)}>{category}</button>)}

        </div>
        {/*{...card} is used to pass all the props from the allCards array, less manual writing within the jsx itself */}
        <div className={styles.projectCards}>
            {visibleCards.map(card =><ProjectCard key={card.title} {...card} />)}
        </div>
        
    </main>
    )
}
import { useState } from "react"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import styles from '../components/ProjectCard/ProjectCard.module.css'

export default function Projects(){
    const categories = ["Coding", "Design"]
    const [filter, setFilter] = useState(null);

    const allCards = [
        {
            category: "Coding",
            src: "https://culturedcode.com/things/2024-01-20/images/hero-logo-things-io70.png",
            href: "https://culturedcode.com/things/",
            title: "Coding Project",
            description: "A minimalist task manager built with React and Firebase. It focuses on clean Design, fast performance, and simple collaboration, making everyday planning effortless on any device."
            },
            {
            category: "Design",
            src: "https://m-cdn.phonearena.com/images/hub/550-wide-two_1200/iPhone-17-Pro-Max-release-date-price-and-features.jpg",
            href: "https://culturedcode.com/things/",
            title: "Design Project",
            description: "A minimalist task manager built with React and Firebase. It focuses on clean Design, fast performance, and simple collaboration, making everyday planning effortless on any device."
            },
    ]
       
    function filterProjects(category){
        setFilter(category);
    }

    let visibleCards = filter ? allCards.filter(card => card.category === filter) : allCards;

    return(
    <main>
        <div className={styles.projectFilters}>
        <button className={styles.filterButton} onClick={() => filterProjects(null)}>All</button>
        {categories.map(category => <button className={styles.filterButton} key={category} onClick={() => filterProjects(category)}>{category}</button>)}

        </div>
        {/*{...card} is used to pass all the props from the allCards array, less manual writing within the jsx itself */}
        <div className={styles.projectCards}>
            {visibleCards.map(card =><ProjectCard key={card.title} {...card} />)}
        </div>
    </main>
    )
}
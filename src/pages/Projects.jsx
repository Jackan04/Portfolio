import { useState } from "react"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import ProjectData from '../data/projects.js'
import styles from '../components/ProjectCard/ProjectCard.module.css'

export default function cards(){
    const categories = ["Coding", "Design"]
    const [filter, setFilter] = useState(null);
    const cards = [...ProjectData]

    function filtercards(category){
        setFilter(category);
    }

    let visibleCards = filter ? cards.filter(card => card.category === filter) : cards;

    return(
    <main>
        <div className={styles.projectFilters}>
        <button className={`${styles.filterButton} ${styles.button}`} onClick={() => filtercards(null)}>All</button>
        {categories.map(category => <button className={styles.filterButton} key={category} onClick={() => filtercards(category)}>{category}</button>)}

        </div>
        {/*{...card} is used to pass all the props from the cards array, less manual writing within the jsx itself */}
        <div className={styles.projectCards}>
            {visibleCards.map(card =><ProjectCard key={card.title} {...card} />)}
        </div>
        
    </main>
    )
}
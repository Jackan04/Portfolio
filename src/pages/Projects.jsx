import { useState } from "react"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import styles from '../components/ProjectCard/ProjectCard.module.css'
import ProjectCards from '../data/projects.js'

export default function cards(){
    const categories = ["Coding", "Design"]
    const [filter, setFilter] = useState(null);
    const cards = [...ProjectCards]

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
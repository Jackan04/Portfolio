import { useState } from "react"
import ProjectCard from "../components/ProjectCard/ProjectCard"

export default function Projects(){
    const categories = ["coding", "design"]
    const [filter, setFilter] = useState(null);

    const allCards = [
        {
            category: "coding",
            src: "https://culturedcode.com/things/2024-01-20/images/hero-logo-things-io70.png",
            href: "https://culturedcode.com/things/",
            title: "My Project",
            description: "A minimalist task manager built with React and Firebase. It focuses on clean design, fast performance, and simple collaboration, making everyday planning effortless on any device."
            },
            {
            category: "design",
            src: "https://culturedcode.com/things/2024-01-20/images/hero-logo-things-io70.png",
            href: "https://culturedcode.com/things/",
            title: "My Project 2",
            description: "A minimalist task manager built with React and Firebase. It focuses on clean design, fast performance, and simple collaboration, making everyday planning effortless on any device."
            },
    ]
       
    function filterProjects(category){
        setFilter(category);
    }

    function showAllCards(){
        setFilter(null)
    }

    let visibleCards = filter ? allCards.filter(card => card.category === filter) : allCards;

    return(
    <main>
        <div className="filter-buttons">
        <button onClick={showAllCards}>All</button>
        {categories.map(category => <button key={category} onClick={() => filterProjects(category)}>{category}</button>)}

        </div>
        {/*{...card} is used to pass all the props from the allCards array, less manual writing within the jsx itself */}
        {visibleCards.map(card =><ProjectCard key={card.title} {...card} />)}
    </main>
    )
}
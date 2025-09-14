import ProjectCard from "../components/ProjectCard/ProjectCard"

export default function Projects(){
    
    return(
    <main>
        <div className="project-page-text">
            <h1 className="project-page-title heading">My Projects</h1>
            <p className="project-page-description">Here I showcase projects I’ve worked on, ranging from design and coding to photography and more.</p>
        </div>
        <ProjectCard category="coding" src="https://culturedcode.com/things/2024-01-20/images/hero-logo-things-io70.png" href="https://culturedcode.com/things/" title="My Project" description="A minimalist task manager built with React and Firebase. It focuses on clean design, fast performance, and simple collaboration, making everyday planning effortless on any device."></ProjectCard>
    </main>

        
    )
}
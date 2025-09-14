import styles from './ProjectCard.module.css'

export default function ProjectCard(props){

    return(

        <div className={styles.projectCard} category = {props.category}>
            <img src={props.src} alt={props.alt} />
            <div className={styles.projectCardContent}>
                    <h2 className={styles.projectCardTitle}><a href={props.href}>{props.title}</a></h2> 
                    <p className={styles.projectCardDescription}>{props.description}</p>
            </div>
            
        </div>
    )
}

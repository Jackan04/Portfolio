import styles from './ProjectCard.module.css'
import FolderIcon from '../../assets/icons/folder.svg?react'
import CodeIcon from '../../assets/icons/code.svg?react'
import SwatchbookIcon from '../../assets/icons/swatchbook.svg?react'

export default function ProjectCard(props){

    return(
        <a href={props.href}>
            <div className={styles.projectCard} category={props.category}>
                    
                <div className={styles.projectCardIconWrapper}>
                    <FolderIcon className={styles.projectCardIcon}></FolderIcon>
                </div>

                <div className={styles.projectCardContent}>
                    <h2 className={styles.projectCardTitle}><a href={props.href}>{props.title}</a></h2> 
                    <p className={styles.projectCardDescription}>{props.description}</p>
                </div>

                <p className={styles.projectCategoryLabel}>
                    {props.category === "Coding" ? <CodeIcon className={styles.categoryLabelIcon}/> : <SwatchbookIcon className={styles.categoryLabelIcon}/>}
                    {props.category}
                </p>
            
            </div>
        
        </a>
       
    )
}

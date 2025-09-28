import styles from './LinkCard.module.css'


export default function SocialCard(props){

    return(

        <a target="_blank" href={props.href} className={`${styles.card} ${styles.button}`}>
            <span className={styles.icon}>{props.icon}</span>
            <p className={styles.title}>{props.title}</p>
        </a>
    )
}
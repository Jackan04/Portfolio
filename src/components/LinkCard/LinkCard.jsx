import styles from './LinkCard.module.css'


export default function SocialCard(props){

    return(

        <a href={props.href} className={`${styles.card} ${styles.button}`}>
            {props.icon}
            <p className={styles.title}>{props.title}</p>
        </a>
    )
}
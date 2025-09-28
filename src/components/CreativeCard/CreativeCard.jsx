import styles from './CreativeCard.module.css'


export default function CreativeCard(props){

    return(
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={styles.icon}>{props.icon}</span>
                <a href={props.href} className={styles.title}>{props.title}</a>
            </div>
                <p className={styles.description}>{props.description}</p>
        </div>
    )
}
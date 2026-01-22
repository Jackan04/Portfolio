import styles from './CreativeCard.module.css'


export default function CreativeCard(props){

    return(
        <div className={styles.card}>
              <span className={styles.icon}>{props.icon}</span>
                <a href={props.href} className={styles.title}>{props.title}</a>
        </div>
    )
}
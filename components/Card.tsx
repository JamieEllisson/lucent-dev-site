import styles from "./Card.module.css"

function Card(props: { image: string | undefined; role: string | undefined; name: string | undefined; bio1: string | undefined; bio2: string | undefined; twitter: string | undefined; linkedin: string | undefined }) {
    return(
        <div className={styles.card}>
            <img src={props.image} alt="profile image"/>
            <div className={styles.card_content}>
                <h3>{props.role}</h3>
                <h2>{props.name}</h2>
                <p>{props.bio1}<br/>{props.bio2}</p>
                <div className={styles.card_socials}>
                    <a href={props.twitter}><img src="/img/twitter.webp"/></a>
                    <a href={props.linkedin}><img src="/img/linkedin.webp"/></a>
                </div>                
            </div>
        </div>
    )       
}

export default Card
import s from "./Hero.module.css"

export default function Hero() {
    return(
        <div className={s.opas}>
            <div className={s.back}><h1 className={s.heroTittle}>OUTLAST</h1></div>
            <a href="#questi"><button className={s.heroButton}>Переглянути квести</button></a>
        </div>  
    )
}
import team from '../../img/team.svg'
import ind from '../../img/ind.svg'
import age from '../../img/age.svg'
import safety from '../../img/safety.svg'
import s from './Qualitat.module.css'

export default function Qualitat() {
    return(
        <div className={s.qualitatSection}>
             <h2 className={s.why}>Чому саме ми?</h2>
            <ul className={s.qualitatList}>
                <li className={s.qualitatItem}>
                    <img className={s.qualitatImg} src={team} alt="" />
                    <h3 className={s.qualitatTittle}>Команда акторiв</h3>
                    <span className={s.qualitatDesc}>Гра наших акторiв не залишить вас байдужими, адже вони проходять складне навчання, перед тим як стати настрашнiшими маньяками та демонами</span>  
                    </li>
                <li className={s.qualitatItem}>
                    <img className={s.qualitatImg} src={ind} alt="" />
                    <h3 className={s.qualitatTittle}>Индивiдуальний пiдхiд</h3>
                    <span className={s.qualitatDesc}>Актеры та адмiнiстратори завжди намагаются знайти пiдхiд к кожному з вас, що б вы отримали максимум вражень</span>  
                    </li>
                <li className={s.qualitatItem}>
                    <img className={s.qualitatImg} src={age} alt="" />
                    <h3 className={s.qualitatTittle}>Вiк</h3>
                    <span className={s.qualitatDesc}>Нашi квести підходять в будь-якому віцi. Віковий діапазон наших команд від 10 до 50 років</span>  
                    </li>
                <li className={s.qualitatItem}>
                    <img className={s.qualitatImg} src={safety} alt="" />
                    <h3 className={s.qualitatTittle}>Безпечнiсть</h3>
                    <span className={s.qualitatDesc}>Мы за безпечне проходження квестов, тому кожна кiмната обладнана камерами, а адмiнiстратор уважно спостерiгае за вами всю гру</span>  
                    </li>
            </ul>
        </div>
    )
}
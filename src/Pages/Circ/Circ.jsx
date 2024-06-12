import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import s from './Cirk.module.css'
import time from '../../img/advanstage/time.svg'
import actor from '../../img/advanstage/actor.svg'
import creepy from '../../img/advanstage/creepy.svg'
import doubble from '../../img/advanstage/doubble.svg'
import { nanoid } from "nanoid/non-secure";

export default function Circ() {
  

    const currentDate1 = new Date().getDate()

    const currentDate2 = new Date().getDate() + 1;

    const currentDate3 = new Date().getDate() + 2;

    const currentDate4 = new Date().getDate() + 3;

    const currentDate5 = new Date().getDate() + 4;

    const currentMonth = new Date().getMonth()



    const arrDate = []

    arrDate.push(currentDate1, currentDate2, currentDate3, currentDate4, currentDate5)


    return(
       <div>
            <Header/>
            <div className={s.opas}>
            <a href="#calendar"><button className={s.heroButton}>Забронювати гру</button></a>
            </div>


            <div className={s.opys}>
                <div className={s.hist}>
                    <h2 className={s.questTittle}>Iсторiя</h2>
                <span className={s.questHist}>
                Квест в реальності "Цирк жахів" є інтригуючим і захоплюючим хорор-перформансом, де ви опиняєтеся в покинутому цирку в ролі бранців. Вам доведеться розгадати загадки і розкрити таємницю зникнення людей, при цьому стикаючись з жахами та небезпеками, 
                які чатують на вас на кожному кроці.
                У цирку жахів немає місця веселощів та радості, як у звичайному цирку. Тут на вас чекають незвичайні та лякаючі персонажі, серед яких клоуни відіграють особливу роль. За кожним із них ховається своя темна історія, і вам доведеться розкрити їхні секрети.
                </span>
                </div>
            <div className={s.questAdress}>
                <h3 className={s.contactTittle}>Контакти</h3>
                <ul className={s.questContactList}>
                    <li className={s.questContactItem}>Мiсто: <span className={s.contactDesc}>Одеса</span></li>
                    <li className={s.questContactItem}>Адреса: <span className={s.contactDesc}>Провулок Нахімова 6</span> </li>
                    <li className={s.questContactItem}>Номер телефону: <span className={s.contactDesc}>+380 (95) 102 57 08</span></li>
                </ul>
            </div>
            </div>

            <div className={s.advantages}>
                <ul className={s.advantagesList}>
                    <li className={s.advantagesItem}>
                        <img src={time} alt=""className={s.advantagesImg}/> <br />
                        <span className={s.advantagesDesc}>Проходження цього квесту займае приблизно 60 хвилин</span>
                    </li>
                    <li className={s.advantagesItem}>
                        <img src={actor} alt="" className={s.advantagesImg}/> <br />
                        <span className={s.advantagesDesc}>Проходження цього квесту мiстить гру актора</span>
                    </li>
                    <li className={s.advantagesItem}>
                        <img src={creepy} alt="" className={s.advantagesImg}/> <br />
                        <span className={s.advantagesDesc}>Цей квест э квестом жахiв</span>
                    </li>
                    <li className={s.advantagesItem}>
                        <img src={doubble} alt="" className={s.advantagesImg}/> <br />
                        <span className={s.advantagesDesc}>Додатково ви можете придбати другий рiвень страху (+200грн)</span>
                    </li>
                </ul>
            </div>
            <div id='calendar' className={s.calendar}>
                <h2 className={s.reservation}>Обери зручну дату</h2>
                <h3 className={s.resDesc}>*Базова вартість за гру вказана за 4 гравця, доплата за кожного наступного гравця 200 грн, максимальна кількість гравців - 6.</h3>
                <ul className={s.dateList}>
                <ul className={s.time}>
                    <li className={s.timePrice}>11.00</li>
                    <li className={s.timePrice}>12.30</li>
                    <li className={s.timePrice}>14.00</li>
                    <li className={s.timePrice}>15.30</li>
                    <li className={s.timePrice}>17.00</li>
                    <li className={s.timePrice}>18.30</li>
                    <li className={s.timePrice}>20.00</li>
                </ul>
                    {arrDate.map(el => 
                        <li key={nanoid()} className={s.dayList}>
                        <span className={s.date}>{el}.0{currentMonth}</span>
                        <ul className={s.timeList}>
                            <li className={s.timeItem}> <button className={s.timeButton}>1100грн</button></li>
                            <li className={s.timeItem}> <button className={s.timeButton}>1100грн</button></li>
                            <li className={s.timeItem}> <button className={s.timeButton}>1200грн</button></li>
                            <li className={s.timeItem}> <button className={s.timeButton}>1200грн</button></li>
                            <li className={s.timeItem}> <button className={s.timeButton}>1300грн</button></li>
                            <li className={s.timeItem}> <button className={s.timeButton}>1400грн</button></li>
                            <li className={s.timeItem}> <button className={s.timeButton}>1500грн</button></li>
                        </ul>
                        </li>
                            )}
                </ul>
            </div>
            <Footer/>
       </div>
    )
}
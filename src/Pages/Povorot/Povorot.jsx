import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import s from "./Povorot.module.css";
import time from "../../img/advanstage/time.svg";
import actor from "../../img/advanstage/actor.svg";
import creepy from "../../img/advanstage/creepy.svg";
import doubble from "../../img/advanstage/doubble.svg";
import BookingCalendar from "../../Components/Calendar/Calendar";
import { Link, animateScroll as scroll } from "react-scroll"; // Импортируем библиотеку


export default function Povorot() {
  const currentDate1 = new Date().getDate();
  const currentDate2 = new Date().getDate() + 1;
  const currentDate3 = new Date().getDate() + 2;
  const currentDate4 = new Date().getDate() + 3;
  const currentDate5 = new Date().getDate() + 4;

  const questName = "povorot";

  const arrDate = [];

  arrDate.push(
    currentDate1,
    currentDate2,
    currentDate3,
    currentDate4,
    currentDate5
  );

  return (
    <div>
      <Header />
      <div className={s.opas}>
      <Link to="calendar" smooth={true} duration={400}>
          <button className={s.heroButton}>Забронювати гру</button>
        </Link>
      </div>

      <div className={s.opys}>
        <div className={s.hist}>
          <h2 className={s.questTittle}>Iсторiя</h2>
          <span className={s.questHist}>
            Натхнений знаменитим фільмом жахів "Поворот не туди", ескейп-рум
            відправить вас до глухих гор Західної Вірджинії, де знаходиться
            покинутий завод з переробки отрутохімікатів. Тутешні жителі
            розповідають страшні історії про незрозумілі події, що відбуваються
            там, пов'язані з появою заводу. Жителі міста почали зникати, а потім
            з'явилися чутки про мутації та вбивства. Завод закрили, але це не
            зупинило серію викрадень та вбивств. Ви - група сміливців, які
            вирішили випробувати свій успіх і пройти випробування на цьому
            небезпечному місці. Але все закінчилося сумно - ви отямилися в
            темному будинку, наповненому жахами, де вам доведеться боротися за
            виживання, щоб вибратися звідти живими.
          </span>
        </div>
        <div className={s.questAdress}>
          <h3 className={s.contactTittle}>Контакти</h3>
          <ul className={s.questContactList}>
            <li className={s.questContactItem}>
              Мiсто: <span className={s.contactDesc}>Одеса</span>
            </li>
            <li className={s.questContactItem}>
              Адреса:{" "}
              <span className={s.contactDesc}>
                {" "}
                Одеса, вул. Новосельського 47
              </span>{" "}
            </li>
            <li className={s.questContactItem}>
              Номер телефону:{" "}
              <span className={s.contactDesc}>+380 (95) 102 57 08</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.advantages}>
        <ul className={s.advantagesList}>
          <li className={s.advantagesItem}>
            <img src={time} alt="" className={s.advantagesImg} /> <br />
            <span className={s.advantagesDesc}>
              Проходження цього квесту займае приблизно 60 хвилин
            </span>
          </li>
          <li className={s.advantagesItem}>
            <img src={actor} alt="" className={s.advantagesImg} /> <br />
            <span className={s.advantagesDesc}>
              Проходження цього квесту мiстить гру актора
            </span>
          </li>
          <li className={s.advantagesItem}>
            <img src={creepy} alt="" className={s.advantagesImg} /> <br />
            <span className={s.advantagesDesc}>Цей квест э квестом жахiв</span>
          </li>
          <li className={s.advantagesItem}>
            <img src={doubble} alt="" className={s.advantagesImg} /> <br />
            <span className={s.advantagesDesc}>
              Додатково ви можете придбати другий рiвень страху (+200грн)
            </span>
          </li>
        </ul>
      </div>
      <BookingCalendar questName={questName} />
      <Footer />
    </div>
  );
}

import Logo from "../Logo/Logo"
import s from './Footer.module.css'
import inst from '../../img/inst.svg'
import phone from '../../img/phone.svg'
import email from '../../img/mail.svg'


export default function Footer() {
    return(
        <footer>
            <div className={s.footerSection}>
                <div className={s.logotype}><Logo/>Outlast</div>
            <div className={s.contacts}>
                <ul className={s.contactsList}>
                    <li className={s.contactItem}><a href="https://www.instagram.com/outlast.quest/"><img className={s.instIcon} src={inst} alt="" /></a></li>
                    <li className={s.contactItem}><a href="tel:+380 99 516 91 66"><img className={s.instIcon} src={phone} alt="" /></a></li>
                    <li className={s.contactItem}><a href="https://www.instagram.com/outlast.quest/"><img className={s.instIcon} src={email} alt="" /></a></li>
                </ul>
                </div>
            </div>
        </footer>
    )
}
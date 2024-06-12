import Logo from '../Logo/Logo'
import s from './header.module.css'
import inst from '../../img/inst.svg'
import phone from '../../img/phone.svg'
import email from '../../img/mail.svg'

export default function Header() {
    return(
        <header>
            <a className={s.hLink} href='/'><div className={s.logotype}><Logo/>Outlast</div></a>
            <div className={s.contacts}>
                <ul className={s.contactsList}>
                    <li className={s.contactItem}><a href="https://www.instagram.com/outlast.quest/"><img className={s.instIcon} src={inst} alt="" /></a></li>
                    <li className={s.contactItem}><a href="tel:+380 99 516 91 66"><img className={s.instIcon} src={phone} alt="" /></a></li>
                    <li className={s.contactItem}><a href="https://www.instagram.com/outlast.quest/"><img className={s.instIcon} src={email} alt="" /></a></li>
                </ul>
                </div>
        </header>
    )
}
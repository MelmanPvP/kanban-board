import {useState} from "react";
import {IconProfile} from "../../icons/icon-profile";
import {IconChevron} from "../../icons/icon-chevron";
import css from './profile.module.scss'
export default function Profile  ()  {
    const [isOpen, setIsMenuShown] = useState(false);

    return (
        <div className={css.profile}
             onClick={() => setIsMenuShown(!isOpen)}>
            <div className={css.profile__logo}><IconProfile/></div>
            <div className={`${css.chevron} ${isOpen ? css.up : ''}`}>
                <IconChevron/>
            </div>

            {isOpen && <div className={css.menu}>
                <div className={css.menu__text_1}>Profile</div>
                <div className={css.menu__text_2}>Log Out</div>
            </div>
            }
        </div>
    )
}
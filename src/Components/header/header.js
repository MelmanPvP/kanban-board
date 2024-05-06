import css from './header.module.scss'
import Profile from "./profile/profile";
export default function Header () {
  return (
      <header className= {css.header}>
        <span className={css.header__text}>Awesome Kanban Board</span>
          <Profile></Profile>
      </header>
  )
}
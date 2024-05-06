import css from './footer.module.scss'
import {useTasks} from "../../Hooks/task/use-task";
export  default function Footer () {
    const {getActiveTaskCount, getFinishedTaskCount} = useTasks();
  return (
      <footer className={css.footer}>  <span className={css.footer__tasks_active}>Active tasks:{getActiveTaskCount()} </span>
        <span className={css.footer__tasks_finished}>Finished tasks: {getFinishedTaskCount()} </span>
        <span className={css.footer__author}>Kanban board by Dima, 2024</span>
      </footer>
  )
}
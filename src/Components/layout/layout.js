import css from './layout.module.scss'
import Header from "../header/header";
import Footer from "../footer/footer";
export default function Layout (props) {
     return (
         <div className={css.layout}>
             {props.children}
         </div>

     )
}
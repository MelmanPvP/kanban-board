import css from './layout.module.scss'
import {TaskProvider} from "../../Hooks/task/task-provider";
import {LayoutProvider} from "../../Hooks/layout/layout-provider";
export default function Layout (props) {
     return (
         <TaskProvider>
             <LayoutProvider>
         <div className={css.layout}>
             {props.children}
         </div>
             </LayoutProvider>
          </TaskProvider>
     )
}
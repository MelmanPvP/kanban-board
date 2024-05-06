import Column from "./column/column";
import css from './board.module.scss'
import {useTasks} from "../../Hooks/task/use-task";
export  default function Board(){
    const {states} = useTasks();
    return(
        <>
        <div className={css.board}>
            {states.map(
                (state) =>
                    <Column key={state.id} name={state.name} state={state.state}/>
            )}
        </div>

        </>
    )
}
import Column from "./column/column";
import css from './board.module.scss'
export  default function Board(){
    return(
        <>
        <div className={css.board}>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
        </div>

        </>
    )
}
import Card from "./card/card";
import css from './column.module.scss'
import Scrollbars from "react-custom-scrollbars-2";
export default function Column (props) {
    return(
        <div className={css.column}> <div className={css.header}>{props.name}</div>
            <div className={css.wrapper}>
                <div className={css.body}>
                    <Scrollbars autoHeight autoHeightMax={700}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/><Card/><Card/><Card/>
                    </Scrollbars>
                </div>
                <div className={css.footer}>
                    <button>+Add card</button>
                </div>
            </div>

        </div>
    )
}
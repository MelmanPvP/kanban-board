import css from './card.module.scss'
import {IconRemove} from "../../../icons/icon-remove";
import Button from "../../../buttons/button/button";
import {useNavigate} from "react-router-dom";

export default function Card(props) {
    const navigate = useNavigate;


    return (
        <div className={css.card} onClick={() => navigate(`/task/${props.id}`)} >
            <span>{props.name}</span>
                <Button className = {css['button-remove']} onClick={
                    (e) =>
                    {
                        props.onRemove(props.id)
                        e.stopPropagation();
                    }}>
                       <IconRemove />
                </Button>
        </div>
    )
}
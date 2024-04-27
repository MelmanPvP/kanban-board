import css from './card.module.scss'
export default function Card(props) {
    return (
        <div className={css.card} >
            <span>{props.name}</span>

        </div>
    )
}
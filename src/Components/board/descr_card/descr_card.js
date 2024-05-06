import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useTasks} from "../../../Hooks/task/use-task";
import Button from "../../buttons/button/button";
import css from './descr_card-module.scss'
import {IconRemove} from "../../icons/icon-remove";
export default function DescrCard  ()  {
    const navigate = useNavigate();
    const {getTaskById, updateTask} = useTasks();
    const {cardId} = useParams();
    const [task, setTask] = useState();

    useEffect(() => {
        if (cardId) {
            setTask(getTaskById(cardId))
        }
    }, [cardId, getTaskById])

    const navigateBack = () => navigate(-1);

    return (
        <div className={css.card}>
            {task &&
                <div  className={css.body}>
                <textarea className={css.name}
                          value={task.name}
                          onChange={(e) =>
                              setTask({
                                  ...task,
                                  name: e.target.value
                              })}
                />
                    <textarea className={css.description}
                              onChange={(e) =>
                                  setTask({
                                      ...task,
                                      description: e.target.value
                                  })}
                              value={task.description}

                    />
                </div>
            }
            <Button className={css.button_close} onClick={navigateBack}>
                <IconRemove/>
            </Button>
            <div className={css.footer}>
                <button  className={css.button} onClick={() => {
                    updateTask(task);
                    navigateBack();
                }}>Save Card</button>
            </div>
        </div>
    )
}

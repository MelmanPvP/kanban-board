import Card from "./card/card";
import css from './column.module.scss'
import Scrollbars from "react-custom-scrollbars-2";
import {useState} from "react";
import {useLayout} from "../../../Hooks/layout/use-layout";
import {useTasks} from "../../../Hooks/task/use-task";
export default function Column (props) {
    const [isNewTaskInputShown, setIsNewTaskInputShown] = useState(false);
    const [inputCardName, setInputCardName] = useState();

    const [isNewTaskSelectShown, setIsNewTaskSelectShown] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(undefined);

    const {mainContentHeight} = useLayout();
    const {getTasksByState, getTasksByExcludedState, addNewTask, moveTask, removeTask } = useTasks();

    const tasks = getTasksByState(props.state);
    const hasTasks = tasks.length > 0;

    const onInputCard = (e) => {
        setInputCardName(e.target.value);
    }


    return (
        <div className={css.column}>
            <div className={css.header}>{props.name}</div>
            <div className={css.wrapper}>
                <div className={css.body}>
                    {hasTasks &&
                        <Scrollbars autoHeightMax = {mainContentHeight} autoHide autoHeight>
                            {
                                tasks.map((task) =>
                                    <Card key={task.id} id={task.id} name={task.name} onRemove={(id) => {
                                        removeTask(id);
                                    }
                                    } />)
                            }
                        </Scrollbars>
                    }

                    {isNewTaskInputShown &&
                        <div>
                            <input placeholder='please enter a task' onInput={onInputCard} />
                        </div>
                    }

                    {isNewTaskSelectShown && <select onChange= {
                        (e) => setSelectedTaskId(e.target.value)}>
                        <option>Select Task</option>
                        {getTasksByExcludedState(props.state).map((task) =>
                            <option key={task.id} value={task.id}>{task.name}</option>
                        )}
                    </select>}
                </div>
                <div className={css.footer}>
                    {(!isNewTaskInputShown && !isNewTaskSelectShown) &&
                        <button className={css.button} onClick={() => props.state === 'backlog'
                            ? setIsNewTaskInputShown(true)
                            : setIsNewTaskSelectShown(true)
                        }
                        >+Add card</button>}

                    {(isNewTaskInputShown || isNewTaskSelectShown) &&
                        <button className={css.button_active}  onClick={() => {
                            if (props.state === 'backlog') {
                                setIsNewTaskInputShown(false);
                                if(inputCardName !== "" && inputCardName !== undefined){
                                    addNewTask(inputCardName)
                                };
                                setInputCardName(undefined);
                            } else {
                                setIsNewTaskSelectShown(false);
                                moveTask(selectedTaskId, props.state);
                            }
                        }}
                        >Submit</button>
                    }
                    {(isNewTaskInputShown || isNewTaskSelectShown)
                        && <button className={css.button_active} onClick={() =>
                            props.state === 'backlog'
                                ? setIsNewTaskInputShown(false)
                                : setIsNewTaskSelectShown(false)
                        }> Hide</button>}
                </div>
            </div>
        </div>
    )
}
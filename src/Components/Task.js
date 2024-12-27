import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {editTask} from '../redux/actions/taskactions';


const Task = ({task}) => {
    const dipatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const[discription , setDiscription] = useState(task.discription);

    const handlesave = () => {
        setEdit(false);
        dipatch(editTask(task.id, discription));
    };

    const togglestatus = () => {
        dipatch(editTask(task.id, discription, !task.isDone));
    };

    return (
        <div>
            {edit ? (
                <input type="text" value={discription} onChange={(e) => setDiscription(e.target.value)} />
            ) : (
                <span onClick={togglestatus} style={{textDecoration: task.isDone ? 'line-through' : 'none'}}>{task.discription}</span>
            )}
            <button onClick={handlesave}>{edit ? 'save' : 'edit'}</button>
        </div>
    );
};

export default Task;
import  {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTask} from '../redux/actions/taskactions';
import {useNavigate} from 'react-router-dom';

const AddTask = () => {
    const [discription, setDiscription] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const handlesave = (e) => {
        e.preventDefault();
        if(discription){
            const task = {
                discription,
                isDone: false,
                id: Math.random(),
        };
        dispatch(addTask(task));
        setDiscription('');
        navigate('/');
        };
    };

    return (
        <div>
            <form onSubmit={handlesave}>
                <label>Task</label>
                <input type="text" value={discription} placeholder='Your new task' onChange={(e) => setDiscription(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTask;
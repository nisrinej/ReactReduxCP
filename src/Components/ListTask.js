import react from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {filterTask} from '../redux/actions/taskactions';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const handlefilter = (filter) => {
        if(filter === 'all') dispatch(filterTask('all'));
        else{

            dispatch(filterTask(filter == 'done' ? 'undone' : 'done'));

        }
        
    };

    return (
        <div>
            <div>
                <button onClick={() => handlefilter('all')}>All</button>
                <button onClick={() => handlefilter('done')}>Done</button>
                <button onClick={() => handlefilter('undone')}>Undone</button>
            </div>
            {tasks
                .map((task) => (
                    <Task key={task.id} task={task} />
                ))}
        </div>
    );
};

export default ListTask;

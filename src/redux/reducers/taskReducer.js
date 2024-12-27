import {addTask, editTask, filterTask} from '../actions/taskactions';

const initialState = {
    tasks: [
        {
          id: 1,
          description: "Learn redux",
          isDone: false,
        },
        {
          id: 2,
          description: "build a to do app",
          isDone: true,
        },
      ],
      filteredTasks:[
        {
          id: 1,
          description: "Learn redux",
          isDone: false,
        },
        {
          id: 2,
          description: "build a to do app",
          isDone: true,
        },
      ],
    };

    const taskreducer = (state = initialState, action) => {
        switch (action.type) {
            case addTask:
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload],
                    filteredTasks: [...state.tasks, action.payload],
                };
            case editTask:
                return {
                    ...state,
                    tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                    ? { ...task, description: action.payload.description, isDone: action.payload.isDone }
                    : task
                    ),
                    filteredTasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                    ? { ...task, description: action.payload.description, isDone: action.payload.isDone }
                    : task
                    ),
                };
            case filterTask:
                return {
                    ...state,
                    filteredTasks: state.tasks.filter((task) =>
                    action.payload === "all"
                    ? task
                    : action.payload === "done"
                    ? task.isDone
                    : !task.isDone
                    ),
                };
            default:
                return state;
    };
    
};

export default taskreducer;
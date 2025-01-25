import { CREATE_TASK, DELETE_TASK, UPDATE_TASK , TOGGLE_COMPLETED } from "./TaskTypes"
import initialState from "./TaskInitial";
export const  taskReducer = ( state = initialState , action ) => {
    switch(action.type){
        case CREATE_TASK:
            return {
                ...state,
                task:[...state.task , { text: action.payload.text , isCompleted: false}]
            }
        case UPDATE_TASK:
            return {
                ...state,
                task: state.task.map((task, index) =>
                    index === action.payload.index
                    ? { ...task, text: action.payload.text } 
                    : task
                    )
                };
        case TOGGLE_COMPLETED:
            return {
                ...state,
                task: state.task.map((task , index ) =>
                    index === action.payload.index ? {...task , isCompleted: action.payload.isCompleted} : task
                )
            }
        case DELETE_TASK:
            return {
                ...state , 
                task: state.task.filter((item , index) => index !== action.payload.index)
            }
        default:
            return state
    }
}

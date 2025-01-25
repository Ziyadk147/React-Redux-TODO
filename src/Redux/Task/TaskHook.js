import { useDispatch } from "react-redux"
import { createTask, deleteTask, toggleCompleted, updateTask } from "./TaskActions"

const useTaskActions = () => {
    const dispatch = useDispatch()
    

    const addTask = (task) => {
        dispatch(createTask(task))
    }
    
    const editTask = (task , index) => {
        dispatch(updateTask(task , index))
    }
    const toggleTask = (index , isCompleted) => {
        dispatch(toggleCompleted(index , isCompleted))
    }
    const destroyTask = (index) => {
        dispatch(deleteTask(index))
    }
    return {
        addTask,
        editTask,
        toggleTask,
        destroyTask,
    }
}
export default useTaskActions;
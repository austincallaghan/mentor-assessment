import axios from 'axios';

const initialState = {
    tasks: [],
    task: ''

}

const FETCH_TASKS = 'FETCH_TASKS'
const CREATE_TASK = 'CREATE_TASK'
const EDIT_TASK = 'EDIT_TASK'
const DELETE_TASK = 'DELETE_TASK'
const MARK_COMPLETE = 'MARK_COMPLETE'

export default function reducer( state = initialState, action) {
    console.log(action.payload)
    switch(action.type){
        case FETCH_TASKS + `_FULFILLED`:
            return {...state, tasks: action.payload}
        case CREATE_TASK + `_FULFILLED`:
            return {...state, task: action.payload}
        case EDIT_TASK + `_FULFILLED`:
            return {...state, tasks: action.payload}
        case DELETE_TASK + `_FULFILLED`:
            return {...state, task: action.payload}
        case MARK_COMPLETE + `_FULFILLED`:
            return {...state, tasks: action.payload}
        default:
        return state
    }
}
export function fetchTasks(){
    return {
        type: FETCH_TASKS,
        payload: axios.get('https://practiceapi.devmountain.com/api/tasks').then(response => {
            return response.data
        })
    }
}
export function createTask(title){
    return {
        type: CREATE_TASK,
        payload: axios.post('https://practiceapi.devmountain.com/api/tasks', {title: title}).then(response => {
            return response.data
        })
    }
}
export function editTask(title, description, completed){
    return {
        type: EDIT_TASK,
        payload: axios.patch('https://practiceapi.devmountain.com/api/tasks/:id', title, description, completed).then(response => {
            return response.data
        })
    }
}
export function deleteTask(id){
    return {
        type: DELETE_TASK,
        payload: axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(response => {
            console.log('response', response)
            return response.data
        })
    }
}
export function markCompleted(id){
    return {
        type: MARK_COMPLETE,
        payload: axios.put('https://practiceapi.devmountain.com/api/tasks/:id', {id}).then(response => {
            return response.data
        })
    }
}

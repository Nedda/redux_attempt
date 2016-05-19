import redux from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VISIBILITY_FILTER = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addToDo(text){
    return {
        type: ADD_TODO,
        text: text
    }
}

export function completeToDo(text){
    return {
        type: COMPLETE_TODO,
        index: index 
    }
}

export function setVisibility(filter){
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter 
    }
}

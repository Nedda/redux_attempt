import redux from 'redux';
import actions from  '../actions/createToDo.js';

const initialState = {
    visibilityFilter: actions.VISIBILITY_FILTER.SHOW_ALL,
    todos: []
}

function todos(state, action){
    if(action.type === 'ADD_TODO'){
        return [
            ...state,
            {
                text: action.text,
                completed: false
            }
        ] 
    }
    if(action.type === 'COMPLETE_TODO'){
        state.todos.map((todo, index) =>{
            if(index === action.index) {
                return Object.assign({}, state, {
                    completed: true
                })
            }
            return todo;
        })
    }
    if(typeof state === 'undefined'){
        return state = [];
    }
}

function toDoApp (state, action){
    if(typeof state === 'undefined' ){
        return initialState;
    }

    if(action.type === 'SET_VISIBILITY_FILTER'){
        return Object.assign({}, state, {
            visibilityFilter: action.filter
        })
    }
    if(action.type === 'ADD_TODO'){
    }
    if(action.type === 'COMPLETE_TODO'){
        return Object.assign({}, state, {
            todos: todos(state.todos, action)
        })
    }
}

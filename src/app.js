import ToDo from './ToDo.js';
import todoApp from './reducers/toDoReducers.js'
import {addToDo, completeToDo, setVisibilityFilter, VisibilityFilters } from './actions/createToDo.js'
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import { TodoList } from './components/TodoList.js';

let store = createStore(todoApp);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log('subscribing', store.getState());
})

store.dispatch(addToDo('Learn about things'));
store.dispatch(addToDo('cry'));
store.dispatch(completeToDo(0));

const App = () => {
    <div>
        help
    </div>
}
ReactDOM.render(
    <ToDo/>, document.getElementById('app')
)


import React, { PropTypes } from 'react';
import Todo from '../Todo.js';

const TodoList = ({ todoArray, onTodoClick }) => (
    <ul>
        {todoArray.map(todo => 
           <Todo 
                onClick={() => onTodoClick(todo.id)}
                completed={todo.completed}
                text={todo.text}/>
          )}
    </ul>
);


TodoList.propTypes = {
    todoArray: PropTypes.arrayOf(PropType.shape({
        id: PropTypes.num.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.jsRequired
}

export default TodoList;

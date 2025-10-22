import React from 'react';
import TodoItem from './TodoItem';

/**
 * PUBLIC_INTERFACE
 * TodoList renders a list of todos and provides delete action for each.
 */
function TodoList({ todos, onDelete, deleteAriaLabel }) {
  return (
    <ul className="todo-list" aria-live="polite">
      {todos.map((t) => (
        <li key={t.id} className="todo-item">
          <TodoItem todo={t} onDelete={onDelete} deleteAriaLabel={deleteAriaLabel} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

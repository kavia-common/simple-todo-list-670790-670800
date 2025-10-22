import React from 'react';

/**
 * PUBLIC_INTERFACE
 * TodoItem displays a single todo with a delete action.
 */
function TodoItem({ todo, onDelete, deleteAriaLabel }) {
  const handleDelete = () => onDelete(todo.id);

  return (
    <>
      <span className="todo-text">{todo.text}</span>
      <button
        className="icon-btn"
        aria-label={deleteAriaLabel}
        title={deleteAriaLabel}
        onClick={handleDelete}
      >
        {/* Trash icon (UTF-8) */}
        🗑️
      </button>
    </>
  );
}

export default TodoItem;

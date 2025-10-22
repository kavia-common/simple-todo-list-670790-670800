import React, { useState, useCallback } from 'react';
import './index.css';

/**
 * Simple Todo app implemented with local state, no backend.
 * Ocean Professional styling is provided via CSS variables and utility classes.
 */

// Components
import TodoList from './components/TodoList';

// PUBLIC_INTERFACE
function App() {
  /** Title and UI copy per requirements */
  const UI = {
    title: 'Simple Todo',
    placeholder: 'What needs to be done?',
    add_button: 'Add',
    empty_state: 'No tasks yet. Add your first todo!',
    delete_aria: 'Delete todo',
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  // PUBLIC_INTERFACE
  const addTodo = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos((prev) => [{ id: crypto.randomUUID(), text: trimmed }, ...prev]);
    setInput('');
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // PUBLIC_INTERFACE
  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div className="container">
      <div className="card" style={{ padding: 20 }}>
        <div className="header">
          <h1 className="title">{UI.title}</h1>
          <p className="subtitle">Ocean Professional</p>
        </div>

        <div className="input-row" role="region" aria-label="Add todo">
          <label htmlFor="todo-input" className="sr-only" style={{ position: 'absolute', left: -10000 }}>
            {UI.placeholder}
          </label>
          <input
            id="todo-input"
            className="input"
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={UI.placeholder}
            aria-label={UI.placeholder}
          />
          <button className="button" onClick={addTodo} aria-label={UI.add_button}>
            {UI.add_button}
          </button>
        </div>

        {todos.length === 0 ? (
          <div className="empty" role="status" aria-live="polite" style={{ marginTop: 16 }}>
            {UI.empty_state}
          </div>
        ) : (
          <TodoList todos={todos} onDelete={deleteTodo} deleteAriaLabel={UI.delete_aria} />
        )}

        <div className="footer-note">State persists only while the page is open.</div>
      </div>
    </div>
  );
}

export default App;

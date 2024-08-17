function TodoItem({ todo, toggleComplete, removeTodo }) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo._id)}
            />
            <span className={todo.completed ? 'completed' : ''} >
                {todo.title} - {todo.description}
            </span>
            <button onClick={() => removeTodo(todo._id)}>Delete</button>
        </div>
    );
}

export default TodoItem;

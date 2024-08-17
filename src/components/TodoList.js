import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;

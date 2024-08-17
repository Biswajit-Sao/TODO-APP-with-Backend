import { useEffect, useState } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await getTodos();
            setTodos(todos);
        };
        fetchTodos();
    }, []);

    const addTodo = async (todo) => {
        const newTodo = await createTodo(todo);
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = async (id) => {
        const todo = todos.find(todo => todo._id === id);
        const updatedTodo = await updateTodo(id, { completed: !todo.completed });
        setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
    };

    const removeTodo = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo._id !== id));
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
    );
}

export default App;

import { useState } from 'react';

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        addTodo({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Add Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Add Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;

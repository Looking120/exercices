import React, { useState, useMemo } from 'react';
import './stylesMe.css'; 

const UseMemo = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Finish report', completed: false },
        { id: 2, title: 'Buy groceries', completed: true },
        { id: 3, title: 'Schedule meeting with team', completed: false },
        { id: 4, title: 'Reply to emails', completed: false },
        { id: 5, title: 'Workout', completed: true },
        { id: 6, title: 'Clean the house', completed: false },
        { id: 7, title: 'Prepare presentation', completed: true },
        { id: 8, title: 'Pay bills', completed: true },
        { id: 9, title: 'Read a book', completed: false },
        { id: 10, title: 'Update software', completed: true },
        { id: 11, title: 'Plan vacation', completed: false },
        { id: 12, title: 'Attend workshop', completed: true },
    ]);
    
    const [showCompleted, setShowCompleted] = useState(false);
    const [sortBy, setSortBy] = useState('title');

    const filteredTasks = useMemo(() => {
        console.log('Filtering tasks...');
        return tasks.filter(task => 
            showCompleted ? task.completed : true
        );
    }, [tasks, showCompleted]);

    const sortedTasks = useMemo(() => {
        console.log('Sorting tasks...');
        return [...filteredTasks].sort((a, b) => {
            if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            } else {
                return a.completed - b.completed;
            }
        });
    }, [filteredTasks, sortBy]);

    const addTask = () => {
        const newTask = { id: tasks.length + 1, title: `New Task ${tasks.length + 1}`, completed: false };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="container">
            <div className="tasks-section">
                <section className="title">
                    <span>
                        Voici un exemple complet où useMemo est bien appliqué. Imaginons une application de gestion de tâches où nous avons un composant qui filtre et trie une liste de tâches. Le filtrage et le tri peuvent être des opérations coûteuses, donc nous allons utiliser useMemo pour optimiser ces calculs.
                    </span>
                    <h2>Exemple : Application de Gestion de Tâches</h2>
                </section>
                <div className="button-group">
                    <button onClick={addTask}>Add Task</button>
                </div>
                <div className="checkbox-label">
                    <input 
                        type="checkbox" 
                        checked={showCompleted} 
                        onChange={() => setShowCompleted(!showCompleted)} 
                    />
                    Show Completed
                </div>
                <div className="button-group">
                    <button onClick={() => setSortBy('title')}>Sort by Title</button>
                    <button onClick={() => setSortBy('completed')}>Sort by Completed</button>
                </div>
                <ul className="task-list">
                    {sortedTasks.map(task => (
                        <li key={task.id} className="task-item">
                            {task.title} - {task.completed ? 'Completed' : 'Pending'}
                            <button 
                                className="remove-task" 
                                onClick={() => removeTask(task.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UseMemo;

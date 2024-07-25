import React, { useReducer, useState } from 'react';
import './BlogApp.css'; // Importation du fichier CSS

// État initial
const initialState = {
posts: []
};

// Réducteur
function reducer(state, action) {
    switch (action.type) {
        case 'add':
        return {
            ...state,
            posts: [
            ...state.posts,
            {
                id: Date.now(),
                title: action.title,
                content: action.content,
                date: new Date().toLocaleString() // Ajouter la date
            }
            ]
        };
        case 'delete':
        return {
            ...state,
            posts: state.posts.filter(post => post.id !== action.id)
        };
        case 'edit':
        return {
            ...state,
            posts: state.posts.map(post =>
            post.id === action.id
                ? { ...post, title: action.title, content: action.content }
                : post
            )
        };
        default:
        throw new Error(`Action type ${action.type} is not supported.`);
    }
    }

    // Composant Principal
    const BlogApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [editId, setEditId] = useState(null);

    const handleAddPost = () => {
        if (newTitle.trim() !== '' && newContent.trim() !== '') {
        dispatch({ type: 'add', title: newTitle, content: newContent });
        setNewTitle('');
        setNewContent('');
        }
    };

    const handleEditPost = (id, title, content) => {
        setEditId(id);
        setNewTitle(title);
        setNewContent(content);
    };

    const handleSaveEdit = () => {
        if (newTitle.trim() !== '' && newContent.trim() !== '') {
        dispatch({ type: 'edit', id: editId, title: newTitle, content: newContent });
        setEditId(null);
        setNewTitle('');
        setNewContent('');
        }
    };

    return (
        <div className="container">
        <div className="blog-app">
            <h1>Blog App</h1>
            <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Title"
            />
            <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Content"
            ></textarea>
            {editId ? (
            <button onClick={handleSaveEdit}>Save Edit</button>
            ) : (
            <button onClick={handleAddPost}>Add Post</button>
            )}
            <ul>
            {state.posts.map(post => (
                <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p className="date">{post.date}</p> {/* Affichage de la date */}
                <div className="button-container">
                    <button onClick={() => handleEditPost(post.id, post.title, post.content)}>Edit</button>
                    <button onClick={() => dispatch({ type: 'delete', id: post.id })}>Delete</button>
                </div>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    };

export default BlogApp;

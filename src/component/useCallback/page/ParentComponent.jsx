    import React, { useState, useCallback } from 'react';

    import './styles.css'; // Assurez-vous d'importer le fichier CSS
    import ChildComponent from './ChildPage';

    function ParentComponent() {
        const [count, setCount] = useState(0);
        const [items, setItems] = useState([]);
        const [message, setMessage] = useState("Bonjour!");
    
        // Fonction pour incrémenter le compteur
        const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
        console.log(`Compteur incrémenté: ${count + 1}`);
        };
    
        // Fonction pour ajouter un élément et incrémenter le compteur
        const addItem = useCallback(() => {
        setItems(prevItems => {
            const newItems = [...prevItems, `Item ${prevItems.length + 1}`];
            setCount(prevCount => prevCount + 1); // Incrémente le compteur
            console.log('Nouvel élément ajouté:', newItems);
            return newItems;
        });
        }, []);
    
        // Fonction pour mettre à jour le message
        const updateMessage = () => {
        setMessage(`Nouveau message: ${Date.now()}`);
        console.log('Message mis à jour:', `Nouveau message: ${Date.now()}`);
        };
    
        return (
        <div className="container">
            <h1>Compteur: {count}</h1>
            <button onClick={incrementCount}>Incrémenter le compteur</button>
            <button onClick={addItem}>Ajouter un élément</button>
            <button onClick={updateMessage}>Mettre à jour le message</button>
            <ChildComponent items={items} message={message} />
        </div>
        );
    }
    
    export default ParentComponent;

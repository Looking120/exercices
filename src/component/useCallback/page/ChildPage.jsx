import React from 'react';
import './styles.css'; // Assurez-vous d'importer le fichier CSS

const ChildComponent = React.memo(({ items, message }) => {
  console.log('ChildComponent render, items:', items, 'message:', message);

  return (
    <div className="container">
      <h2>{message}</h2>
      <h3>Liste des éléments:</h3>
      <ul>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>Aucun élément</li>
        )}
      </ul>
    </div>
  );
});

export default ChildComponent;

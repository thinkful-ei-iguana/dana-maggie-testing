import React from 'react';
import Card from './Card';
import App from './App';



export default function List({header, cards}) {
    let cardList = cards.map(card => 
        (<Card title={card.title} content={card.content}/>)
            )

    return (
        <section className="List">
            <header className="List-header">
                <h2>{header}</h2>
                
            </header>
            <div className="List-cards">{cardList}</div>
        </section>

    )
  }

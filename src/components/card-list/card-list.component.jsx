import React from 'react';


import {Card} from 'C:/aman/react/monsters-rolodex/src/components/card/card.component.jsx';
import './card-list.style.css';


const Cardlist = (props) => {
    return(
        <div className="card-list">
            { props.monsters.map( monster => ( <Card key={monster.id} monster={ monster } />  ) )}
        </div>
    );
}

export default  Cardlist;
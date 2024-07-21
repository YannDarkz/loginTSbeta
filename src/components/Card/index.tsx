import './cardStyle.scss'
import React from 'react';

interface CardProps {
    tittle: string;
    p1: string;
    p2: string;
}

const Card: React.FC<CardProps> = ({tittle, p1, p2}) => {

    return(
        <div className="container_card">
            <h2>{tittle}</h2>
            <p className='p1'>{p1}</p>
            <p className='p2'>{p2}</p>
        </div>
    )
}

export default Card
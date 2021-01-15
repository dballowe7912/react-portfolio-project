import React from 'react';
import Card from './Card';
import './css/LeftColumn.css';

const LeftColumn = () => {
    return (
        <div className='leftcolumn'>
            <div className='row'>
                <div className='col'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default LeftColumn;
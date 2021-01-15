import React from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './css/MainContent.css';


const MainContent = () => {
    return (
        <div className='main-content'>
            <LeftColumn/>
            <RightColumn/>
        </div>
    )
}

export default MainContent;
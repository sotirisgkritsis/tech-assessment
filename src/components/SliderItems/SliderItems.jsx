import React from 'react';

// css
import './SliderItems.css';
const sliderItems = (props) =>(
    <div className="SliderItems">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
);

export default sliderItems;
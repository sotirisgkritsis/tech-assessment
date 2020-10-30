import React, { Component } from 'react';

// import axios from '../../axios';
// components
// import Navigation from '../../components/Navigation/Navigation';
// css
import './Assessment.css'
import Slider from '../../components/Slider/Slider';
import Sections from '../../components/Sections/Sections';
import SectionTwo from '../../components/SectionTwo/SectionTwo';
class Assessment extends Component {
    render(){
        return(
            <div>
                <section>
                    <Slider />
                    <h4>Our Sections</h4>
                    <Sections />
                    <SectionTwo />
                </section>
            </div>
        );
    }
}

export default Assessment;
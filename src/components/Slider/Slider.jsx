import React, {Component} from 'react';


// css
import './Slider.css'
// axios
import axios from '../../axios';
// components
import NavigationItems from '../NavigationItems/NavigationItems';
import SliderItems from '../SliderItems/SliderItems';
class Slider extends Component {
    state = {
        items: [],
        slider: []
    }

    componentDidMount() {
        axios.get('/menu')
            .then(response => {
                // console.log(response.data);
                const items = response.data;
                const updatedItems = items.map(item => {
                    return{
                        ...item
                    }
                })
                this.setState({items: updatedItems})
            });

        axios.get('/slider')
            .then(response => {
                // console.log(response.data);

                // display the first item
                const sliderItems = response.data.slice(0, 1);
                const updatedSliderItems = sliderItems.map(sliderItem => {
                    return{
                        ...sliderItem
                    }
                })
                this.setState({slider: updatedSliderItems})
            })
    }
    
    render()
    {
        let items = this.state.items.map(i => {
            return <NavigationItems
                    key={i.id} 
                    title={i.title}
                   />
        });

        let sliderItems = this.state.slider.map(sliderI => {
            return <SliderItems 
                    key={sliderI.id}
                    title={sliderI.title}
                    subtitle={sliderI.subtitle}
                    />
        });

        return(
            <div className="Slider">
                <div className="Navigation">
                    <div className="container">
                        <div className="row">
                        {items}
                        <i id="searchIcon" className="fas fa-search"></i>
                        </div>
                    </div>
                    
                </div>
                <div className="SliderText">
                    <div className="container">
                        <div className="row">
                            {sliderItems}
                        </div>
                    </div>
                </div>
        
            </div>
        );
    }
}

export default Slider
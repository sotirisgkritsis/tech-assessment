import React, { Component } from 'react';


// css
import './Sections.css';
// components
import axios from '../../axios';
import Section1Items from '../Section1Items/Section1Items';
class Sections extends Component {

    state = {
        sectionOne: [],
        sectionTwo: []
    }
    componentDidMount(){
        axios.get('/home')
            .then(response => {
                
                let homeItems = response.data;
                // let obj = JSON.stringify(homeItems);
                let updatedHomeItems = homeItems.map(homeItem =>{
                    return {
                        ...homeItem.sections[0].images[0]
                    }
                })
                this.setState({sectionOne: updatedHomeItems});
            });
        
        axios.get('/home')
        .then(response => {
            
            let homeItems1 = response.data;
            // let obj = JSON.stringify(homeItems);
            let updatedHomeItems1 = homeItems1.map(homeItem1 =>{
                return {
                    ...homeItem1.sections[0].images[1]
                }
            })
            this.setState({sectionTwo: updatedHomeItems1});
        });


    }
    render(){
        console.log(this.state.sectionOne);
        let sectionOneItems = this.state.sectionOne.map(sectionOne =>{
            return <Section1Items                 
                    title={sectionOne.title}
                    image={sectionOne.img}
                    />
        })

        let sectionOneItems1 = this.state.sectionTwo.map(sectionOne =>{
            return <Section1Items                 
                    title={sectionOne.title}
                    image={sectionOne.img}
                    />
        })
        return(
            <div className="Sections">
                <div className="row">
                    <div className=" col-3 d-flex ml-auto">
                        <a className="mr-5" href="\">Section 1</a>
                        <a href="\">Section 2</a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mr-5">
                            {sectionOneItems}
                        </div>
                    <div className="col-md-7 box2 row">
                        <div className="insideBox1 mr-3">
                            {sectionOneItems1}
                        </div>
                        <div className="insideBox2">
                            {sectionOneItems1}
                        </div>
                        <div className="insideBox3 mr-3">
                            {sectionOneItems1}
                        </div>
                        <div className="insideBox4 ">
                            {sectionOneItems1}
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Sections;
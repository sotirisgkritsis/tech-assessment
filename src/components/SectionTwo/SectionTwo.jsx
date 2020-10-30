import React, { Component } from 'react';


// css
import './SectionTwo.css';
class SectionTwo extends Component {

    
    render(){
        const style1 = {
            width: '60%'
        }
        const style2 = {
            width: '20%'
        }
        const style3 = {
            width: '5%'
        }
        const style4 = {
            width: '25%'
        } 
        return(
            <div className="container section2">
                <p className="sectionTwop">Our Services</p>
                <div className="row">
                    <div className="col-6">
                        <h3>We create websites and campaigns that expose new opportunities</h3>
                        <div className="percentages">
                            <p>PERCENTAGE 1</p>
                            <div class="progress mb-3">
                            <div class="progress-bar bg-success" role="progressbar" style={style1}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>PERCENTAGE 2</p>
                            <div class="progress mb-3">
                            <div class="progress-bar bg-info" role="progressbar" style={style2}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>PERCENTAGE 3</p>
                            <div class="progress mb-3">
                            <div class="progress-bar bg-warning" role="progressbar" style={style3}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>PERCENTAGE 4</p>
                            <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style={style4}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <h3 className="info mb-5">Validate your info</h3>
                    <p className="info mb-5">We work with ecosystem leaders, corporations and startups worldwide. How can we help you?</p>
                    <input class="form-control mb-4" type="text" placeholder="Your Phone" required maxLength="10" size="10"></input>
                    <input class="form-control mb-4" type="text" placeholder="Your Email"></input>
                    <input class="form-control mb-2" type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"></input>
                    <div className="buttonArea">
                    <input type="submit" value="Submit"></input>
                    </div>
                    


                    </div>
                </div>
            </div>
        );
    }
}

export default SectionTwo;
import React, {Component} from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import AboutCards from "./AboutCards";
import Axios from 'axios';

class About extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        Axios.get('https://api.myjson.com/bins/q501k')
            .then((response) => {
                this.setState({data: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        const { data } = this.state;

        return(
            <React.Fragment>
                <div className="main-heading"><span className="about-section">About</span></div>

                <div className='about-inner-container'>
                    <ul>
                        <AboutCards data={data}/>
                    </ul>
                </div>

            </React.Fragment>
        )
    }
}

export default About

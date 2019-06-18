import React, { Component } from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import SlickSlider from "./SlickSlider";
import AboutCards from "./AboutCards";
import Axios from "axios";
import ProductSlider from "./productSlider";

class Home extends Component {

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
                {/*<PageHeader>*/}
                    {/*Home*/}
                {/*</PageHeader>*/}

                <div>
                    <SlickSlider />
                </div>

                <div className='about-inner-container'>
                    <ProductSlider data={data}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home

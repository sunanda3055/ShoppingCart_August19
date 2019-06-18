import React, { Component } from 'react';
import { Button, InputGroup } from 'react-bootstrap';

class Counter extends Component {

    state = {
        qty: this.props.quantity,
    }

    decrement = (id) =>{
        const { updateProductQuantity } = this.props;
        const { qty } = this.state;
        const decVal = qty - 1;
        this.setState({qty : decVal});
        updateProductQuantity(qty - 1, id);
    }

    increment = (id) =>{
        const { updateProductQuantity } = this.props;
        const { qty } = this.state;
        const incVal = qty + 1;
        this.setState({qty : incVal});
        updateProductQuantity(qty + 1, id);
    }

    render(){
        const { id, quantity } = this.props;
        const { qty } = this.state;

        return(
            <InputGroup>
                <Button onClick={() => this.decrement(id)} disabled={qty === 1}>-</Button>
                <InputGroup.Addon>{quantity}</InputGroup.Addon>
                <Button onClick={() => this.increment(id)}>+</Button>&nbsp;
            </InputGroup>
        )
    }
}

export default Counter;
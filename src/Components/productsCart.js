import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import {addProduct, generateItemId, removeProduct, updateProduct} from '../actions';
import ProductCard from './productCard';

class ProductsCart extends Component {

    state = {
        productDetail : '',
        errorMessage: '',
        //id: 0,
    }

    setProductDetail = (val) => {
        this.setState({productDetail : val}, this.checkInvalidProduct);
    }

    // changes
    checkInvalidProduct() {
        const { productDetail } = this.state;
        const checkAlpha = /[a-zA-z ]$/g;
        const checkNum = /[0-9]$/g;
        const productName = productDetail.split('-')[0];
        const productPrice = productDetail.split('-')[1];
        if (
            !(productName && productName.match(checkAlpha))
            || !(productPrice && productPrice.match(checkNum))
        ) {
            this.setState({ errorMessage: 'Not Valid' });
        } else {
            this.setState({ errorMessage: '' });
        }
        return null;
    }

    //Need to remove
    // generateItemId = () => {
    //     let { id } = this.state;
    //     let incId = id + 1;
    //     this.setState({id: incId});
    //     return id;
    // }

    // change
    updateProductQuantity = (qty, id) => {
        const { updateProduct } = this.props;
        updateProduct(qty, id);
    }

    checkItemExists(productList, name) {
        const updatedList = productList.find((item) => item['productName'] === name);
        return updatedList !== undefined;
    }

    addProductDetails = (e) => {
        e.preventDefault();

        const { addProduct, productList, generateItemId } = this.props;
        const { productDetail } = this.state;
        const arr = productDetail.split('-');
        const productName = arr[0];
        const price = arr[1];

        const info = {
            productName,
            price,
        }

        if(productList.length > 0){
            const itemExists = this.checkItemExists(productList,productName);

            !itemExists ? (
                generateItemId(),
                addProduct(info),
                        this.setState({ errorMessage: '' })
                )

                : this.setState({ errorMessage: 'item already exists' })
        }
        else{
            generateItemId(),
            addProduct(info)
        }

        this.setState({
            productDetail: '',
        });
    }

    deleteProduct = (id) => {
        const { removeProduct } = this.props;
        removeProduct(id);
    }

    showValidationState(){
        const { errorMessage } = this.state;
        if(errorMessage) return 'error';
    }

    render(){
         const { errorMessage, productDetail } = this.state;
         const { productList } = this.props;
         //console.log('productList----->',productList);

        return(
            <React.Fragment>
                <Form inline>

                    <FormGroup controlId="formInlineName" validationState={this.showValidationState()}>
                        <FormControl
                            type="text"
                            name='productDetail'
                            value={productDetail}
                            onChange={(e) => this.setProductDetail(e.target.value)}
                            placeholder="Item-Price"
                        />
                    </FormGroup>

                    <Button
                        type="submit"
                        bsStyle='primary'
                        onClick={(e) => {this.addProductDetails(e)}}
                        disabled={!productDetail || errorMessage !== ''}
                    >
                        ADD
                    </Button>

                    <div className='msg-container'>
                        {
                            errorMessage && (
                                <span>{errorMessage}</span>
                            )
                        }
                    </div>

                </Form>

                <ProductCard
                    productList={productList}
                    deleteProduct={this.deleteProduct}
                    updateProductQuantity={this.updateProductQuantity}
                />

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        productList : state.productList,
    }
};

const mapDispatchToProps = (dispatch) => ({
    generateItemId: bindActionCreators(generateItemId, dispatch),
    addProduct: bindActionCreators(addProduct, dispatch),
    removeProduct: bindActionCreators(removeProduct, dispatch),
    updateProduct: bindActionCreators(updateProduct, dispatch),
});

// const mapDispatchToProps = dispatch => ({
//     addProduct : (info) => dispatch({ type: 'ADD_PRODUCT', data: info }),
//     removeProduct : (id) => dispatch({ type: 'REMOVE_PRODUCT', payload: id })
// });

export default connect(mapStateToProps,mapDispatchToProps)(ProductsCart);


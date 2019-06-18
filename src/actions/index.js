import { ACTIONS } from './actions';

//Need to work
export const addProduct = (info) => (dispatch, getState) => {
    const { productList,id } = getState();
    console.log('getState()--->',getState());
    const { price, productName } = info;
    const newProductList = addItemsToArray(productList, productName, price, id);
    dispatch({
        type: ACTIONS.ADD_PRODUCT,
        data: newProductList,
    });
}

export const removeProduct = (id) => (dispatch, getState) => {
    const { productList } = getState();
    const updatedList = removeItem(productList, id);
    dispatch({
        type: ACTIONS.REMOVE_PRODUCT,
        data: updatedList,
    });
}

export const generateItemId = () => (dispatch, getState) => {
    const { id } = getState();
    const incId = id + 1;
    dispatch({
        type: ACTIONS.GENERATE_ID,
        payload: incId,
    });
}

//Need to work
export const updateProduct = (qty, id) => (dispatch, getState) => {
    const { productList } = getState();
    const updatedList = [...productList];

    const newList = updatedList.map((item) => {
        if(item.id === id){
            item.quantity = qty;
        }
        return item;
    });

    dispatch({
        type: ACTIONS.UPDATE_PRODUCT_QUANTITY,
        data: newList,
    });
}

export const addItemsToArray = (productList, name, price, id) =>  {
    productList.push({
        productName: name,
        price: price,
        quantity: 1,
        id: id,
    })
    return productList
}

export const removeItem = (productList, id) =>  {
    const objIndex = productList.findIndex((obj => obj.id === id));
    const updatedList = [...productList];
    updatedList.splice(objIndex,1);
    return updatedList;
}

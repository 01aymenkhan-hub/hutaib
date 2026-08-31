export const initialState = {
    Product: null,

};


//Selector

//Selector
export const getBasketTotal = (AddPost) =>
    AddPost?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_PRODUCT":

            return {
                ...state,
                Product: action.Product,
            };

        case "GET_PRODUCT":
            return {
                ...state,

            };

        default:
            return state;

    }
};

export default reducer;
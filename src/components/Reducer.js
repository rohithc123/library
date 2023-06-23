export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => Number(item.price) + amount, 0);

const Reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD-TO-CART":
      return {
        ...state,
        //initial state,item to be added
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
};

export default Reducer;

export const initialState = {
  cart: [],
  uses: null,
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
    case "REMOVE-FROM-CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log("No item in cart");
      }
      return {
        ...state,
        cart: newCart,
      };
    case "EMPTY-BASKET":
      return{
        ...state,
        basket:[]
      }

    case "SET-USER":
      return{
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default Reducer;

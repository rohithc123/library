export const initialState = {
  cart: [],
  user: null,
  books: [],
  link: "",
  search: "",
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
      return {
        ...state,
        cart: [],
      };

    case "ADD-BOOKS-SEARCH-RESULT":
      return {
        ...state,
        books: [...state.books, action.item],
      };

    case "SET-USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET-LINK":
      return {
        ...state,
        link: action.link,
      };
    case "SET-SEARCH":
      return {
        ...state,
        search: action.search,
      };

    default:
      return state;
  }
};

export default Reducer;

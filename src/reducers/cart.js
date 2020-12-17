import itemList from "./../data";

const cartReducer = (state = itemList, action) => {
  const id = parseInt(action.payload);
  switch (action.type) {
    case "INCREMENT": {
      return state.map((each) => {
        if (each.id === id) {
          return { ...each, quantity: each.quantity + 1 };
        }
        return each;
      });
    }
    case "DECREMENT": {
      return state.map((each) => {
        if (each.id === id) {
          return { ...each, quantity: each.quantity - 1 };
        }
        return each;
      });
    }
    case "RESET":
      return itemList;
    default:
      return state;
  }
};

export default cartReducer;

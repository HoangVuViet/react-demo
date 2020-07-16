const redux = require('redux');
const createStore = redux.createStore;
// rootReducer
const rootReducer = (state, action) => {
  return state;
};
//Store
const store = createStore(rootReducer);
console.log(store.getState());

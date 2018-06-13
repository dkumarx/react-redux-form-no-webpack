const combineReducers = Redux.combineReducers;
const createStore = Redux.createStore;
const reduxFormReducer = ReduxForm.reducer;

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
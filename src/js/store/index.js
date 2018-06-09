/**
 * Created by benjamin on 09/06/2018.
 */
import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store;
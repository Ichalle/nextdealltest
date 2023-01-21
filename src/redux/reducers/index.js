import { combineReducers } from "redux";
import product from "./productReducer";
import carts from "./cartReducer";

export default combineReducers({
	product,
	carts
})
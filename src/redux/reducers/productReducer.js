import {
    GET_ALL_PRODUCTS,
} from "../actions/productActions";
  
const initialState = {
	products: null
};
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: payload.products
			};
		default:
			return state;
	}
};
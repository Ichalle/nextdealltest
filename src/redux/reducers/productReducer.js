import {
    GET_ALL_PRODUCTS,
	GET_ALL_CATEGORIES
} from "../actions/productActions";
  
const initialState = {
	products: [],
	categories: []
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
		case GET_ALL_CATEGORIES:
			return {
				...state,
				products: payload.categories
			};
		default:
			return state;
	}
};
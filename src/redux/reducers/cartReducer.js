import {
    GET_ALL_CARTS
} from "../actions/productActions";
  
const initialState = {
	carts: []
};
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_ALL_CARTS:
			return {
				...state,
				products: payload.products
			};
		default:
			return state;
	}
};
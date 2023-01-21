import API from '../../axios/API';

export const getAllProducts = () => dispatch => {
	return API({
		method: "GET",
		url: `/products`
	})
		.then(res => {
			dispatch({
				type: GET_ALL_PRODUCTS,
				payload: res.data
			});
			return res.data;
		})
		.catch(error => {
			return error;
		});
};

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
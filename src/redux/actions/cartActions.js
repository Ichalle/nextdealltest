import API from '../../axios/API';

export const getAllCarts = params => dispatch => {
	return API({
	  method: "GET",
	  url: '/carts',
	  params
	})
		.then(res => {
			dispatch({
				type: GET_ALL_CARTS,
				payload: res.data
			});
			return res.data;
		})
		.catch(error => {
			return error;
		});
};

export const getCartsById = ({id, params}) => () => {
	return API({
	  method: "GET",
	  url: `/carts/${id}`,
	  params
	})
		.then(res => {
			return res.data;
		})
		.catch(error => {
			return error;
		});
};

export const GET_ALL_CARTS = "GET_ALL_CARTS";
import API from '../../axios/API';

export const getAllProducts = params => dispatch => {
	return API({
	  method: "GET",
	  url: '/products',
	  params
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

export const getAllCategories = () => dispatch => {
	return API({
	  method: "GET",
	  url: '/products/categories'
	})
		.then(res => {
			dispatch({
				type: GET_ALL_CATEGORIES,
				payload: res.data
			});
			return res.data;
		})
		.catch(error => {
			return error;
		});
};

export const getProductsSearch = params => () => {
	return API({
	  method: "GET",
	  url: '/products/search',
	  params
	})
		.then(res => {
			return res.data;
		})
		.catch(error => {
			return error;
		});
};

export const getProductsByCategory = ({category, params}) => () => {
	return API({
	  method: "GET",
	  url: `/products/category/${category}`,
	  params
	})
		.then(res => {
			return res.data;
		})
		.catch(error => {
			return error;
		});
};

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
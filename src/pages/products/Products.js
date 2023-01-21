import React, { useEffect, useState } from "react";
import Header from "@/components/organisms/ui/header";
import Pagination from "@/components/organisms/ui/pagination";
import Filters from "@/components/organisms/products/filters";
import DataTable from "@/components/organisms/products/dataTable";

const Products = ({ 
	getAllProducts, 
	getAllCategories, 
	getProductsSearch,
	getProductsByCategory,
	products
}) => {
	const [productList, setProductList] = useState([]);
	const [limit, setLimit] = useState(5);
	const [skip, setSkip] = useState(0);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState();
	const [search, setSearch] = useState('');


	const fetchProducts = async () => {
		const payload = {
			limit,
			skip
		}
		await getAllProducts(payload)
			.then((res) => {
				setProducts(res)
			})
	}

	const fetchCategories = async () => {
		await getAllCategories()
			.then((res) => {
				setCategories(res)
			})
	}
	
	const fetchProductSearch = async () => {
		const params = {
			q: search,
			limit,
			skip,
		}
		await getProductsSearch(params)
			.then((res) => {
				setProducts(res)
			})
	}
	
	const fetchProductsByCategory = async () => {
		const params = {
			q: search,
			limit,
			skip,
		}
		await getProductsByCategory({category, params})
			.then((res) => {
				setProducts(res)
			})
	}

	const setProducts = (res) => {
		setProductList(res.products)
		setTotal(Math.floor(res.total / res.limit))
	}

	const onSelecCategory = (val) => {
		setSearch('')
		setSkip(0)
		setPage(1)
		if (!val) {
			return fetchProducts()
		}
		setCategory(val)
	}
	
	const onSearch = (val) => {
		setCategory('')
		setSkip(0)
		setSearch(val)
	}

	const handleClickItem = (val) => {
		console.log(val)
	}

	const handlePagination = (val) => {
		if (val === 1) {
			setSkip(skip + limit)
		} else {
			setSkip(skip - limit)
		}
		setPage(page + val)
	}

	useEffect(() => {
		fetchProducts();
		fetchCategories();
	}, [])
	
	useEffect(() => {
		fetchProducts();
	}, [page])
	
	useEffect(() => {
		if (!search) {
			fetchProductsByCategory();
		}
	}, [category])
	
	useEffect(() => {
		fetchProductSearch();
	}, [search])
	

	return (
		<div>
			<Header title="Products" />
			<Filters 
				categories={categories} 
				valueCategory={category}
				valueSearch={search}
				onSelecCategory={onSelecCategory} 
				onSearch={onSearch} 
			/>
			<DataTable lists={productList} onClick={handleClickItem} />
			<Pagination page={page} total={total} onClick={handlePagination} />
		</div>
	)
}

export default Products;
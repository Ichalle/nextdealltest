import React, { useEffect, useState } from "react";
import Header from "@/components/organisms/ui/header";
import Filters from "@/components/organisms/products/filters";
import DataTable from "@/components/organisms/products/dataTable";
import Pagination from "@/components/organisms/products/pagination";

const Products = ({ getAllProducts, products}) => {
	const [productList, setProductList] = useState([]);
	const [limit, setLimit] = useState(5);
	const [skip, setSkip] = useState(0);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const fetchProducts = async () => {
		const payload = {
			limit,
			skip
		}
		await getAllProducts(payload)
			.then((res) => {
				setProductList(res.products)
				setLimit(res.limit)
				setTotal(res.total / res.limit)
			})
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
	}, [])
	
	useEffect(() => {
		fetchProducts();
	}, [page])

	return (
		<div>
			<Header title="Products" />
			<Filters />
			<DataTable lists={productList} onClick={handleClickItem} />
			<Pagination page={page} total={total} onClick={handlePagination} />
		</div>
	)
}

export default Products;
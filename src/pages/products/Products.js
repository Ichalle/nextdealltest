import React, { useEffect, useState } from "react";
import Header from "@/components/organisms/ui/header";
import Filters from "@/components/organisms/products/filters";

const Products = ({ getAllProducts, products}) => {
	const [productList, setProductList] = useState([]);
	const [limit, setLimit] = useState(5);
	const [total, setTotal] = useState(0);
	const fetchProducts = async () => {
		await getAllProducts()
			.then((res) => {
				setProductList(res.products)
				setLimit(res.limit)
				setTotal(res.total)
			})
	}

	useEffect(() => {
		fetchProducts();
	}, [])

	return (
		<div>
			<Header title="Products" />
			<Filters />
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
		</div>
	)
}

export default Products;
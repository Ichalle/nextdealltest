import React, { useEffect, useState } from "react";
import Link from 'next/link';

export default function Home({
	getAllProducts,
	products
}) {
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
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			{`${limit}`}
			{`${total}`}
			{`${productList}`}
			Home,,,,<button onClick={() => navigate('/cart')}>test</button>
		</div>
	)
}

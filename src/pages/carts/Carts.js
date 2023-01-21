import React, { useEffect, useState } from "react";
import Header from "@/components/organisms/ui/header";
import Pagination from "@/components/organisms/ui/pagination";
import DataTableCarts from "@/components/organisms/carts/dataTableCarts";
import DetailCart from "@/components/organisms/carts/detailCart";

const Carts = ({ 
	getAllCarts
}) => {
	const [cartList, setCartList] = useState([]);
	const [limit, setLimit] = useState(5);
	const [skip, setSkip] = useState(0);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [detailData, setDetailData] = useState();


	const fetchCarts = async () => {
		const payload = {
			limit,
			skip
		}
		await getAllCarts(payload)
			.then((res) => {
				setCartList(res.carts)
				setTotal(Math.floor(res.total / res.limit))
			})
	}

	const handleClickItem = (val) => {
		setDetailData(val);
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
		fetchCarts();
	}, [])
	
	useEffect(() => {
		fetchCarts();
	}, [page])
	

	return (
		<div>
			<Header title="Cart" />
			{detailData && (<DetailCart data={detailData} />)}
			<DataTableCarts lists={cartList} onClick={handleClickItem} />
			<Pagination page={page} total={total} onClick={handlePagination} />
		</div>
	)
}

export default Carts;
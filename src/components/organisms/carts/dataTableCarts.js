const DataTableCarts = ({lists, onClick}) => {
    const handleClickItem = (val) => {
        onClick(val)
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Products
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Products
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User ID
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lists && lists.map((item, index) => {
                        return (
                            <tr key={index} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.products && item.products.map((i, idx) => {
                                        return (
                                            <div key={idx} className="hover:text-rose-500 cursor-pointer" 
                                                onClick={() => handleClickItem(i)}>
                                                {i.title}
                                            </div>
                                        )
                                    })}
                                </th>
                                <td className="px-6 py-4">
                                    {item.totalProducts}
                                </td>
                                <td className="px-6 py-4">
                                    {item.totalQuantity}
                                </td>
                                <td className="px-6 py-4">
                                    {item.userId}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DataTableCarts;
const DataTable = ({lists, onClick}) => {
    const handleClickItem = (val) => {
        onClick(val)
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Brand
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Stock
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lists && lists.map((item, index) => {
                        return (
                            <tr key={index} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.title}
                                </th>
                                <td className="px-6 py-4">
                                    {item.brand}
                                </td>
                                <td className="px-6 py-4">
                                    {item.price}
                                </td>
                                <td className="px-6 py-4">
                                    {item.stock}
                                </td>
                                <td className="px-6 py-4">
                                    {item.category}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
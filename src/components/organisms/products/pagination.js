import React from 'react';

const Pagination = ({page, total, onClick}) => {
    return (
        <nav className="mt-8 w-full flex justify-end">
            <ul className="inline-flex -space-x-px">
                <li>
                    <button disabled={page <= 1} onClick={() => onClick(-1)} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border 
                        border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                        Prev
                    </button>
                </li>
                <li>
                    <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 
                    hover:bg-gray-100 hover:text-gray-700">
                        Page {page} / {total}
                    </button>
                </li>
                <li>
                    <button disabled={page === total} onClick={() => onClick(1)} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 
                    rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;
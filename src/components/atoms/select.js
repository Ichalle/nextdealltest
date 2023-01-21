import {splitStr} from '../../utils';

const Select = ({title, lists, onSelected}) => {
    const handleChange = (val) => {
        onSelected(val.target.value)
    }

    return (
        <div className="flex flex-col md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
            <label for="client">{title}</label>
            <div className="inline-flex relative">
                <select onChange={handleChange} className="bg-rose-400 text-white  
                    capitalize px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300">
                    <option value={''}>All</option>
                    {lists && lists.map((list, index) => {
                        return (
                            <option className='capitalize' key={index} value={list}>{splitStr(list)}</option>
                        )
                    })}
                </select>
                <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default Select;
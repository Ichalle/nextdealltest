import React, {useState, useEffect} from "react"
const Input = ({title, onChange, value}) => {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (val) => {
        setInputValue(val.target.value)
    }
    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            onChange(inputValue)
        }
    }

    useEffect(() => {
        setInputValue(value)
    }, [value])

    return (
        <div className="flex flex-col  md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
            <label for="client">{title}</label>
            <div className="inline-flex relative">
                <input 
                    onChange={handleChange} 
                    onKeyDown={handleEnter}
                    placeholder={title}
                    className="bg-indigo-800/80 text-white tracking-wider pl-4 pr-10 py-3 
                    rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-300" id="client" name="client" type="text" value={inputValue} />
                    <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                        
                    </span>
            </div>
        </div>
    )
}

export default Input;
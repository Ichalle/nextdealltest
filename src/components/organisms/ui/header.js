const Header = ({title}) => {
    return (
        <nav className="text-lg flex items-center justify-between content-center ">
            <div className=" font-semibold text-xl text-gray-800 flex space-x-4 items-center">
                <span>{title}</span>
            </div>
        </nav>
    )
}

export default Header;
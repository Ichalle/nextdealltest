import Link from 'next/link';

const SideNav = () => {
    const menu = [
        {
            text: 'Products',
            link: '/'
        },
        {
            text: 'Carts',
            link: '/carts'
        }
    ]


    return (
        <div className="mt-12 flex flex-col space-y-7 text-gray-500 font-medium">
            {menu.map((item, index) => {
                return (
                    <Link 
                        className="cursor-pointer flex items-center space-x-2 py-1 group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold" 
                        href={item.link}
                        key={index}
                    >
                        <svg className="h-5 w-5 group-hover:stroke-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span>{item.text}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default SideNav;
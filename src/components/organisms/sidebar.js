import TitleHeader from "../atoms/TitleHeader";
import SideNav from "../molecules/sidenav";

const Sidebar = ({children}) => {
    return (
        <aside className="bg-white w-1/5 py-10 pl-10 min-w-min border-r border-indigo-900/20 hidden md:block">
            <TitleHeader title={'Deall Store'} />
            <SideNav />
        </aside>
    )
}

export default Sidebar;
import Sidebar from "../organisms/ui/sidebar";
import MobileMenu from "../organisms/ui/mobileMenu";

const DefaultTemplate = ({ children }) => {
    return (
        <div className="flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50">
            <Sidebar title="Deall Store" />
            <main className="bg-indigo-50/60 w-full pb-10 px-3 md:py-10 sm:px-10">
                <MobileMenu title="Deall Store" />
                {children}
            </main>
        </div>
    )
}

export default DefaultTemplate;
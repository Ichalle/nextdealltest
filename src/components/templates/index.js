import Sidebar from "../organisms/ui/sidebar";

const DefaultTemplate = ({ children }) => {
    return (
        <div className="flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50">
            <Sidebar title="Deall Store" />
            <main className="bg-indigo-50/60 w-full py-10 px-3 sm:px-10">
                {children}
            </main>
        </div>
    )
}

export default DefaultTemplate;
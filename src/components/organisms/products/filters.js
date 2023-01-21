import Select from "@/components/atoms/select";
import Input from "@/components/atoms/input";

const Filters = ({categories, onSelecCategory, onSearch}) => {
    const onSelectCategory = (val) => {
        onSelecCategory(val)
    }

    return (
        <section>
            <div className="bg-rose-100/70 mt-12 rounded-xl px-5 
                sm:px-10 py-8 relative bg-no-repeat bg-right bg-contain mb-8">
                    <div className="text-rose-400 font-semibold text-lg">Filters</div>
                    <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-y-6 gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
                        <Input title={'Search Product'} onChange={onSearch} />
                        {/* <Select title={'Brand'} lists={categoryLists} onSelected={onSelectCategory} />
                        <Select title={'Product'} lists={categoryLists} onSelected={onSelectCategory} /> */}
                        <Select title={'Category'} lists={categories} onSelected={onSelectCategory} />
                    </div>
            </div>
        </section>
    )
}

export default Filters;
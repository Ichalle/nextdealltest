import Select from "@/components/atoms/select";
import Input from "@/components/atoms/input";

const Filters = ({title}) => {
    const categoryLists = [
        {
            value: '',
            text: 'All'
        },
        {
            value: 'A',
            text: 'a'
        },
    ]

    const onSelectCategory = (val) => {
        console.log(val)
    }
    const onSearch = (val) => {
        console.log(val)
    }

    return (
        <section>
            <div className="bg-rose-100/70 mt-12 rounded-xl px-5 
                sm:px-10 pt-8 pb-4 relative bg-no-repeat bg-right bg-contain">
                    <div className="text-rose-400 font-semibold text-lg">Filters</div>
                    <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-y-6 gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
                        <Input title={'Search Product'} lists={categoryLists} onChange={onSearch} />
                        <Select title={'Brand'} lists={categoryLists} onSelected={onSelectCategory} />
                        <Select title={'Product'} lists={categoryLists} onSelected={onSelectCategory} />
                        <Select title={'Category'} lists={categoryLists} onSelected={onSelectCategory} />
                    </div>
            </div>
        </section>
    )
}

export default Filters;
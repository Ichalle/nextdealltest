const detailCart = ({data}) => {
    return (
        <section>
            <div className="bg-rose-100/70 rounded-xl px-5 
                sm:px-10 py-8 relative bg-no-repeat bg-right bg-contain mb-8">
                    <div className="text-rose-400 font-semibold text-lg">Detail Cart</div>
                    <div className="mt-6 flex">
                        <div className="mr-8">
                            <div>ID: #{data.id}</div>
                            <div>Title: {data.title}</div>
                        </div>
                        <div>
                            <div>Price: ${data.price}</div>
                            <div>Discounted Price: ${data.discountedPrice}</div>
                            <div>Total: ${data.total}</div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default detailCart;
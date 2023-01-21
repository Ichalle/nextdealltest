const DefaultTemplate = ({ children }) => {
    return (
        <div>
            <div>navbar</div>
            <div>{children}</div>
        </div>
    )
}

export default DefaultTemplate;
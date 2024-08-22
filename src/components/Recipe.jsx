


const Recipe = (props) => {
    const {title, img} = props
        return(
            <div>
                <h2>{title}</h2>
                <img src={img} alt={title} />
            </div>
        )
}

export default Recipe
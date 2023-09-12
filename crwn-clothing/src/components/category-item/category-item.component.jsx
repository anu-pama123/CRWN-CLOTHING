import './category-item.styles.css';

const categoryItem = (props) => {
    console.log(props.data)
    const {imageUrl, title} = props.category
    return (
        <div className='category-container'>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="category-body-container">
              <div className="category-body">
                <h2 className="category-title">{title}</h2>
                <p className="category-action">Shop Now</p>
              </div>
            </div>
        </div>
    )
}

export default categoryItem;
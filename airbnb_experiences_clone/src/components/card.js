function Card(props){

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
             {badgeText && <div className="card-badge">{badgeText}</div>}
            
            <img src = {require(`../images/${props.item.Img}`)} alt="img" className='card-img'/>

            <div className='card-ratings'>
                <img src = {require('../images/star.png')} alt="star" className='rating-star'/>
                <span>{props.item.stats.rating}</span>
                <span className='gray'> ({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
            </div>

            <p className='card-title'>{props.item.title}</p>
            <p className='card-price'><span className='bold'>From ${props.item.price} </span> / person</p>

        </div>
    )
}

export default Card;
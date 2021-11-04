import './Cards.css'

const Cards = ({image, item, price}) => {
    return (
<div className="card__container">
    <div className="image__container">
        <img className="cards__image"
             src={image}
             alt="#"
        />
    </div>
    <div className="card__info">
        <h5 className="header5">{item}</h5>
        <h5 className="header5">$<strong>{price}</strong></h5>
    </div>
</div>
    );
}

export default Cards;

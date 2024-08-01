import PropTypes from 'prop-types';
export const ShopItem = ({goods}) => {
    return (
        <div className="list-view-item">
            <img src={goods.img} alt="" />
            <div>{goods.name}</div>
            <div>{goods.color}</div>
            <div className="price">{goods.price}</div>
            <button className="button">ADD TO CARD</button>
        </div>
    )
}
ShopItem.propTypes = {
    goods: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};
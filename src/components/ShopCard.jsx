
import PropTypes from 'prop-types';
export const ShopCard = ({goods}) => {
    const imgUrl = goods.img;

    const container = {
        backgroundImage: "url(" + imgUrl + ")",
        width: 300,
        height: 300,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'space-between',
    };

    return (
            <div style={container} className="card-view-item">
                <div>
                    <h2 className="item-name">{goods.name}</h2>
                    <p className="item-color">{goods.color}</p>
                </div>
                <div className="footer">
                    <p className="price">${goods.price}</p>
                    <button className="button">ADD TO CARD</button>
                </div>
            </div>
    )
}

ShopCard.propTypes = {
    goods: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};
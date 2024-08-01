import PropTypes from 'prop-types';
import { ShopCard } from "./ShopCard";

export const CardsView = ({productList}) => {
    return (
        <div className="card-view">
            {productList.map((product, i) => 
                <ShopCard key={i} goods={product}/>
            )}
        </div>
    )

}

CardsView.propTypes = {
    productList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default CardsView;
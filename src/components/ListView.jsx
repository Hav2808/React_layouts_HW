import PropTypes from 'prop-types';
import { ShopItem } from "./ShopItem"

export const ListView = ({productList}) => {
    return (
        <div className="list-view">
            {productList.map((poduct, i) => 
                <ShopItem key={i} goods={poduct}/>
            )}
        </div>
    )
}

ListView.propTypes = {
    productList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // добавьте другие ожидаемые поля продукта
        })
    ).isRequired,
};

export default ListView;
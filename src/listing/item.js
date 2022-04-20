import ItemImage from "./item-image";
import ItemTitle from "./item-title";
import ItemPrice from "./item-price";
import ItemQuantity from "./item-quantity";
import PropTypes from "prop-types";

function Item(props) {
    const { item } = props;

    return (
        <div key={item.listing_id} className={'item'}>
            <ItemImage imageData={item.MainImage} link={item.url} alt={item.title}/>
            <div className={'item-details'}>
                <ItemTitle title={item.title}/>
                <ItemPrice price={item.price} currencyCode={item.currency_code}/>
                <ItemQuantity quantity={item.quantity}/>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Item;

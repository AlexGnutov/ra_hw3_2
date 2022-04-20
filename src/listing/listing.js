import PropTypes from "prop-types";
import ItemImage from "./item-image";
import ItemTitle from "./item-title";
import ItemPrice from "./item-price";
import ItemQuantity from "./item-quantity";

function Listing(props) {
    const {items} = props;

    console.log(Array.isArray(items));
    items.forEach(item =>
        console.log(item.url, item.title)
    )

    return (
        <div className="item-list">
            {
                items.map(item =>
                    item.state === 'active' ?
                    <div key={item.listing_id} className={'item'}>
                        <ItemImage imageData={item.MainImage} link={item.url} alt={item.title}/>
                        <div className={'item-details'}>
                            <ItemTitle title={item.title}/>
                            <ItemPrice price={item.price} currencyCode={item.currency_code}/>
                            <ItemQuantity quantity={item.quantity}/>
                        </div>
                    </div> : null
                )
            }
        </div>
    )
}

Listing.defaultProps = {
    items: [],
}
Listing.propTypes = {
    items: PropTypes.array,
}

export default Listing;

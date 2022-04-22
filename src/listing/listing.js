import PropTypes from "prop-types";
import Item from "./item";

function Listing(props) {
    const {items} = props;
    return (
        <div className="item-list">
            { items.map(item => item.state === 'active' ?
                <div key={item['listing_id']} className={'item'}>
                    <Item item={item}/>
                </div>
                : null) }
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

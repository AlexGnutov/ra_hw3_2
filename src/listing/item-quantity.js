import PropTypes from "prop-types";

function ItemQuantity(props) {
    const {quantity} = props;

    let stockLevelClass = (quantity <= 10 && 'level-low') || (quantity <= 20 && 'level-medium') || (quantity > 20 && 'level-high');
    return (
        <p className={'item-quantity ' + stockLevelClass}>{quantity} Left</p>
    )
}

ItemQuantity.defaultProps = {
    quantity: 0,
}

ItemQuantity.propTypes = {
    quantity: PropTypes.number.isRequired,
}

export default ItemQuantity;

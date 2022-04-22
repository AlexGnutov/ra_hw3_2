import PropTypes from "prop-types";

function ItemPrice(props) {
    const { currencyCode, price } = props;

    const adoptedPrice = parseFloat(price).toFixed(2);

    let priceTitle;
    switch (currencyCode) {
        case 'USD':
            priceTitle = '$' + adoptedPrice;
            break;
        case 'EUR':
            priceTitle = [<span key={1}>&euro;</span>, '' + adoptedPrice];
            break;
        case 'GBP':
            priceTitle = adoptedPrice + ' GBP';
            break;
        default:
            priceTitle = adoptedPrice + ' RUB';
    }

    return (
        <p className="item-price">{priceTitle}</p>
    )
}

ItemPrice.propTypes = {
    currencyCode: PropTypes.string,
    price: PropTypes.string.isRequired,
}

export default ItemPrice;

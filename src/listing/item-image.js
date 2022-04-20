import PropTypes from "prop-types";

function ItemImage(props) {
    const {link, imageData, alt} = props;

    return (
        <div className="item-image">
            <a href={link}>
                <img src={imageData.url_570xN} alt={alt}/>
            </a>
        </div>
    )
}

ItemImage.defaultProps = {
    alt: 'Offer picture',
    link: '#0',
}

ItemImage.propTypes = {
    link: PropTypes.string.isRequired,
    imageData: PropTypes.object.isRequired,
}

export default ItemImage;

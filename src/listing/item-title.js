import PropTypes from "prop-types";

function ItemTitle(props) {
    const { title } = props;

    return (
        <p className={'item-title'}>{
            title.length <= 50 ? title : title.substring(0, 50).concat('...')
        }</p>
    )
}

ItemTitle.defaultProps = {
    title: 'Empty title',
}

ItemTitle.propTypes = {
    title: PropTypes.string,
}

export default ItemTitle;

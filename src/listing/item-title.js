import PropTypes from "prop-types";



function ItemTitle(props) {
    const { title } = props;
    const getDecodedString = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };
    const decoded = getDecodedString(title);
    const html = decoded.length <= 50 ? decoded : decoded.substring(0, 50).concat('...');
    return (
        <p className={'item-title'}>{html}</p>
    )
}

ItemTitle.defaultProps = {
    title: 'Empty title',
}

ItemTitle.propTypes = {
    title: PropTypes.string,
}

export default ItemTitle;

import PropTypes from 'prop-types';
const Bookmark = ({bookmark, idx}) => {
    const {title} = bookmark;
    return (
        <div>
            <div>
                <h1 className='text-base'>{idx+1}. {title}</h1>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
    idx: PropTypes.number
}

export default Bookmark;
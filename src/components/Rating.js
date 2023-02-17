import PropTypes from 'prop-types'

const Rating =  ({value, text, color}) => {
	return(
    <div className='rating'>
        <span>
        <i style={{ color }}
        className ='fas fa-star' />
        </span>
    </div>
    );
}

Rating.defaultProps = {
 color: '#f8e825',
}

Rating.proTypes = {
	value : PropTypes.number.isRequired,
	text : PropTypes.string.isRequired,
	color: PropTypes.string
}

export default Rating
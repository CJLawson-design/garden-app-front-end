import PropTypes from 'prop-types'

function Button( { children, version, type, isDisabled } ) {
    return (
        <button type={type} disabled={isDisabled} className={ `btn btn-${version}` }>
            { children }
        </button>
    )
}

// Default props 
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

// Type checking
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button
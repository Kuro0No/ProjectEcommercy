import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {

    const inputRef = React.useRef(null)

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    return (
        <div className="form-check" >
            <input className="form-check-input" type="checkbox" value="" id={`flexCheckDefault`} ref={inputRef} onChange={onChange} checked={props.checked} />
            <label className="form-check-label" htmlFor={`flexCheckDefault`}>
                {props.label}
            </label>

        </div>

    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default CheckBox

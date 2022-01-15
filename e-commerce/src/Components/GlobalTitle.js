import React from 'react'

const GlobalTitle = (props) => {
    document.title = props.title
    
    return (
        <div >
            {props.children}
        </div>
    )
}

export default GlobalTitle

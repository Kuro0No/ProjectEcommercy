import React from 'react'
import Pagination from "react-js-pagination";


const Paginations = (props) => {
    return (
        <Pagination >
            {props.children}
        </Pagination >
    )
}

export default Paginations

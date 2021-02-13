import "../scss/leftSideBar.scss"
import React from 'react';
export default props => {
    return (
        <>
            <ul className="list-of-url-method">
                {props.children}
            </ul>
        </>
    )
}
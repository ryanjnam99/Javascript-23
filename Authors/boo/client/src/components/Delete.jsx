import React from 'react'

const Delete = (props) => {
    const { successCallback } = props;
    return (
        <div>
            <button onClick={successCallback}>
                Delete
            </button>
        </div>
    )
}

export default Delete
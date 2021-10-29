import React from 'react'

function Alert(props) {
    return (
        <div className="sticky-top" style={{ height: "40px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert

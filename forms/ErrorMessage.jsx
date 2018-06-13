// Error Message common component

import React from 'react'

const ErrorMessage = (props) => 
    <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span className="sr-only">Error:</span>
            {props.errorMessage}
    </div>

export default ErrorMessage
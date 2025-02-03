import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorReactRouter = () => {
    const error = useRouteError();
    console.log(error);
    console.log("ERROR RESP", isRouteErrorResponse(error))
    if (isRouteErrorResponse(error)) {
        return (
          <div>
            <h1>Oops!</h1>
            <h2>{error.status}</h2>
            <p>{error.statusText}</p>
            {error.data?.message && <p>{error.data.message}</p>}
          </div>
        );
      }
}

export default ErrorReactRouter

import React from 'react'

const FailedComponent = () => {
    const arr = undefined;
    const handleError =() => {
        throw new Error('FailedComponent error');
  
    }
  return (
    <div>
      TEST
      <p>
        {arr.map((e)=> <div>TEST</div>)}
        <button onClick={handleError}>ERROR</button>
      </p>
    </div>
  )
}

export default FailedComponent;

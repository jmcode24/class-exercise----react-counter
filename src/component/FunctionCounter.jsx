import React from 'react';

function FunctionCounter() {
  let [number, setNumber] = React.useState(24);

  let handleIncrease = () => {
    setNumber(number + 5);
  };

  let handleDecrease = () => {
    setNumber(number - 10);
  };

  return (
  
      <>
       <div className="container">
         <div className="row">
           <div className="col cont-border mt-3">
           <div className="text-center mb-5">
             <h1 className="display-2 mt-5"> {number} </h1>
             <button className="btn btn-primary mr-4 mt-4" onClick={handleIncrease}> Add Five </button>
             <button className="btn btn-danger mt-4" onClick={handleDecrease}> Substract Ten </button>
           </div>
           </div>
         </div>
       </div>
      </>
    
  )
};


export default FunctionCounter;
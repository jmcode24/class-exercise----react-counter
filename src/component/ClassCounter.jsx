import React from 'react';

class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    }
  };

  handleIncrease = () => {
    this.setState({ number: this.state.number + 6 });
  };

  handleDecrease = () => {
    this.setState({number: this.state.number - 3});
  };

  render() {
    return (
      <>
       <div className="container">
         <div className="row">
           <div className="col cont-border mt-3">
           <div className="text-center mb-5">
             <h1 className="display-2 mt-5"> {this.state.number} </h1>
             <button className="btn btn-primary mr-4 mt-4" onClick={this.handleIncrease}> Add Six </button>
             <button className="btn btn-danger mt-4" onClick={this.handleDecrease}> Substract Three </button>
           </div>
           </div>
         </div>
       </div>
      </>
    );
  };
};

export default ClassCounter; 
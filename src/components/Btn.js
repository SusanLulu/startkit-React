import React from 'react';

class Btn extends React.Component{
  render(){
    const {increment} = this.props;
    //debugger
    return(
     <div>
        <button onClick={increment} > + </button>
     </div>
    )
  }
}


export default Btn;
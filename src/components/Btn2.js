import React from 'react';

class Btn2 extends React.Component{
  render(){
    const {decrease} = this.props;

    return(
     <div style={{fontSize: '10px'}}>
        <button onClick={decrease} > - </button>
     </div>
    )
  }
}

export default Btn2;
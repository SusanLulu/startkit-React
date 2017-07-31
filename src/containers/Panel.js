import React from 'react';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';
//import Btn2 from '../components/Btn2';
import * as counterAction from '../actions/counterAction';

class Panel extends React.Component {
   constructor() {
      super();
      /*this.state = {
         number:0
       }*/ //加入redux后counterReducer替代
   }

/*
 //加入redux后counterCounter替代
   increment = () => {
    let newState = {
      number: this.state.number + 1
    }
    this.setState(newState);

   }

   decrease = () => {
    let minusState = {
      number: this.state.number - 0.5
    }
    this.setState(minusState);
   }

   */

   //<div>作为根节点只有一个  
          // <Show num={this.state.number} />
          // <Btn increment={this.increment} />
          // <Btn2 decrease={this.decrease} />
                     
   render() {

       const {counterReducer,counterAction} = this.props;

      return (
        //设置了id／className后即可使用CSS 
         <div id="div" className="a">
           <Show num={counterReducer} />
           <Btn increment={counterAction.incrementAction} />
	      </div>
      )  
      }
}

const mapStateToProps =(state) =>{
  return{
      counterReducer: state.counterReducer
  }
}

const mapDispatchToProps =(dispatch) => {
  return{
    counterAction: bindActionCreators(counterAction,dispatch)
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Panel);
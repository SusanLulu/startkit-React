import React from 'react';

class Show extends React.Component{
   render(){
     const num = this.props.num;
     //语法糖：等同于 const {num} = this.props;
     /* 语法糖例子2:
     const obj = {
        text:'hello'
     }

     const text = obj.text;
     const {text} = obj;

     */
     return(
     //设置css的方法二 直接使用react的JSX语法
       <div style={{fontSize: '50px'}}>
       show:{num}
       </div>
     )
   }
}

export default Show;
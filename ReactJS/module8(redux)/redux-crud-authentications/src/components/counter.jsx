import React, { Component } from 'react';
class Counter extends Component {
   render()
 {
      const {counter,increment,decrement,reset} = this.props;

      return (
         <div className = "container w-50 p-5 mt-5 shadow mx-auto">
            <div className='fs-3'>{counter}</div>
            <div>
               <button onClick = {increment} className='btn btn-sm ms-2 btn-success mt-3'>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement} className='btn btn-sm ms-2 btn-primary mt-2'>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset} className='btn btn-sm ms-2 btn-danger mt-2'>RESET</button>
         </div>
      );
   }
}
export default Counter;
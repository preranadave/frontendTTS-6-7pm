import React from 'react'

function Counter() {
    return (
        <div className = "container w-50 p-5 mt-5 shadow mx-auto">
           <div className='fs-3'></div>
           <div>
              <button  className='btn btn-sm ms-2 btn-success mt-3'>INCREMENT</button>
           </div>
           <div>
              <button className='btn btn-sm ms-2 btn-primary mt-2'>DECREMENT</button>
           </div>
           <button className='btn btn-sm ms-2 btn-danger mt-2'>RESET</button>
        </div>
     );
}

export default Counter
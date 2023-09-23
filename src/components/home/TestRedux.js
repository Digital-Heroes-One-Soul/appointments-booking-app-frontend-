import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from '../../redux/counterSlice';


export default function TestRedux() {

  const count = useSelector((state) => state.counter.value)
  const isLogged = useSelector(state => state.auth.isLogged)
  const dispatch = useDispatch()
  const countArray = Array.from({ length: count }, (_, index) => (

    <div key={index} style={{
      width: "20px", /* Adjust the width and height as needed */
      height: "20px",
      backgroundColor: "#007bff", /* Change the background color as desired */
      borderRadius: "50%" /* Makes the element a circle */
    }}></div>
  ));

  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e) => {
    setSelectedOption(e.target.value);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.value.value);
    if (value) {

      if (selectedOption === 'Increment') {

        dispatch(incrementByAmount(value))
        e.target.reset()

      }
      else if (selectedOption === "Decrement") {
        dispatch(decrementByAmount(value))
        e.target.reset()
      }
      else {
        alert("Choose on option please..!")
      }

    }

    else
      alert("Inter your value please..!")

  };



  return (
    <>

      {isLogged ? <div style={{margin:"auto 0"}}>
        <h1 style={{ textAlign: "center", color: 'blue' }}>Test Redux</h1>
        <div style={{ display: "flex", gap: "20px", marginLeft: "150px" }}>

          <button style={{ height: "30px" }} onClick={() => dispatch(increment())} >Increment</button>
          <button style={{ height: "30px" }} aria-label='Decrement value' onClick={() => dispatch(decrement())}>Decrement</button>

          <form onSubmit={handleSubmit}>

            <label>
              Increment
              <input
                type="radio"
                value="Increment"
                onChange={handleChange}
                name='count-operation'

              />
            </label>
            <label>
              Decrement
              <input
                type="radio"
                value="Decrement"
                onChange={handleChange}
                name='count-operation'


              />
            </label>
            <input type='number' name='value' placeholder='Just number that accepted' />:
            <button type='submit'>Submit</button>
          </form>
        </div>


        <h3 style={{ marginLeft: "150px" }}>Counter  :  {count}</h3>
        <div style={{ display: "flex", marginLeft: "200px", marginTop: "30px" }}>


          {countArray}
        </div>



      </div> : <h1>Please login to see the logics</h1>}



    </>
  )
}

import { useState } from "react"

// rfce
function RecapUseState() {
  // Javascript
  const num = 6
  const [number,setNumber] = useState(4)
  const [number2,setNumber2] = useState({
    num :5 
  })
  console.log(number2.num)

  const hdlIncrease = ()=>{
    console.log('Easy, useState')
    setNumber((prev)=> prev +1)
  }
  const hdlDecrease = ()=>{
    setNumber((prev)=> prev -1)
  }
  const hdlIncrease2= () =>{
    setNumber2((prev)=>({num: prev.num+1}))
  }
  const hdlDecrease2 = () =>{
    setNumber2((prev)=>({num: prev.num-1}))
  }
  const hdlMulti = ()=>{
    setNumber2((state) => ({num:state.num*2}))
  }
  const hdlDivide =() => {
    setNumber2((state) => ({num:state.num/2}))
  }
  return (
    <div>
        <h1 className="text-8xl">{number}</h1>
        <br/>
        <button 
        onClick={hdlIncrease}
        className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md">Increase</button>
        <button 
        onClick={hdlDecrease}
        className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md">Decrease</button>
         <h1 className="text-8xl">{number2.num}</h1>
         <button
         onClick={hdlIncrease2}
         className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md">Increase2</button>
         <button
         onClick={hdlDecrease2}
         className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md">Decrease2</button>
         <button
         onClick={hdlMulti}
         className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md">Multi</button>
         <button
         onClick={hdlDivide}
         className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md">Divide</button>
    </div>
  )
}
export default RecapUseState
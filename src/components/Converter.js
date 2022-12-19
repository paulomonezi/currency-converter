import React, { Component, useState, setState, useEffect } from "react";

export default class Converter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div className="converter">
      <h2>{this.props.currencyA} to {this.props.currencyB}</h2>
      <input type="text"></input>
      <input type="button" value="Exchange"></input>
      <h2>Converted value</h2>
    </div>
  )
}
}

// export const Converter = (props) => {
//   const [currencyA, setCurrenyA] = useState("")
//   const [currencyB, setCurrencyB] = useState(0)
//   const [value, setValue] = useState('')

//   const handleChange = (event) => {
//     setValue(event.target.value)
//   }

//   return (
//     <div className="converter">
// <h2>{props.currencyA} to {props.currencyB}</h2>
// {console.log(props.currencyA)}
// <input type="text" onChange={handleChange}></input>
// <input type="button" value="convert"></input>
// <h2>Converted value</h2>
// {console.log(currencyA)}
//     </div>
//   )
// }

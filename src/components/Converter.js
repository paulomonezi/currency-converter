import React, { Component } from "react";

export default class Converter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currencyA_value: "",
      currencyB_value: 0,
    }

    this.convert = this.convert.bind(this)
  }

  convert(){
    console.log(this.state)

    let convert_to = `${this.props.currencyA}_${this.props.currencyB}`
    let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${convert_to}&compact=y`

    fetch(url)
    .then(res=>{
      return res.json()
    })
    .then(json=>{
      let currency_value = json[convert_to].val
      let currencyB_value = (parseFloat(this.state.currencyB_value) * currency_value).toFixed(2)
      this.setState({currencyB_value})
    })
  }

  render() {
    return (
    <div className="converter">
      <h2>{this.props.currencyA} to {this.props.currencyB}</h2>
      <input type="text" onChange={(event)=>{this.setState({currenyA_value:event.target.value})}}></input>
      <input type="button" value="Exchange" onClick={this.convert}></input>
      <h2>{this.state}</h2>
      
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

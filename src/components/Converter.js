import React, { useState, setState, useEffect } from 'react'

export const Converter = (props) => {
  const [currencyA, setCurrenyA] = useState("")
  const [currencyB, setCurrencyB] = useState(0)
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="converter">
<h2>{props.currencyA} to {props.currencyB}</h2>
{console.log(props.currencyA)}
<input type="text" onChange={handleChange}></input>
<input type="button" value="convert"></input>
<h2>Converted value</h2>
{console.log(currencyA)}
    </div>
  )
}
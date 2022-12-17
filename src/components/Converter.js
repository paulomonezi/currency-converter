import React from 'react'

export const Converter = (props) => {
  return (
    <div className="converter">
<h2>{props.currencyA} to BRL</h2>
{console.log(props.currencyA)}
<input type="text"></input>
<input type="button" value="convert"></input>
<h2>Converted value</h2>

    </div>
  )
}

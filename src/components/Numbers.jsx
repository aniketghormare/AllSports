import React from 'react'
import styled from "styled-components"
import numbers from "../images/numbers.png"
const Numbers = () => {
  return (
    <DIV>
      <img src={numbers} height={"100%"} width={"100%"}alt="" />
    </DIV>
  )
}

export default Numbers

const DIV=styled.div`
    height: 550px;
    width: 100%;
    /* border: 1px solid red; */
`

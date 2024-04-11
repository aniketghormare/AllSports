import React from 'react'
import styled from "styled-components"
import sponcer from "../images/sponcer.png"
const Sponcers = () => {
  return (
    <DIV>
      <div className='container'>
        {/* <hr style={{border:"1px solid blue",width:"40%"}} /> */}
        <img src={sponcer} height={"100%"} width={"100%"} alt="" />
        {/* <hr style={{border:"1px solid blue",width:"40%"}} /> */}
      </div>
    </DIV>
  )
}

export default Sponcers


const DIV=styled.div`
    height: 1300px;
    width: 100%;
    /* border: 1px solid red; */
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        height: 90%;
        width: 90%;
        /* border: 1px solid red; */
    }
`

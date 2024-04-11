import React from 'react'
import styled from "styled-components"
import acch from "../images/archery.png"
const Sports = () => {
  return (
    <DIV>
      <div className='maincontent'>
           <div className='headingdiv'>
            <h3 style={{fontSize:"35px",color:"#81378F"}}>Sports</h3>
            <button style={{backgroundColor:"#81378F",padding:"5px",color:"white",borderRadius:"5px"}}>View More</button>
           </div>
           <div className='cardsdiv'>
           {
            [1,2,3,4,5,6,7,8,9,10,11,12].map((el,index)=>{
                return (
                    <div className='card'>
                        <img src={acch} height={"100px"} width={"150px"} alt="" />
                    </div>
                )
            })
           }
           </div>
      </div>
    </DIV>
  )
}

export default Sports


let DIV=styled.div`
    height: 300px;
    width: 100%;
    /* border: 1px solid red; */
display: flex;
justify-content: center;
align-items: center;
    .maincontent{
        height: 90%;
        width: 90%;
        /* border: 1px solid red; */
       
        
    }
    .headingdiv{
        height: 20%;
        width: 100%;
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cardsdiv{
        height: 80%;
        width: 100%;
        /* border: 1px solid red; */
        display: grid;
        grid-template-columns: repeat(6,1fr);
        gap: 12px;
    }
    .card{
        height: 100px;
        width: 150px;
        /* border: 1px solid green; */
        border-radius: 7px;
    }
    @media only screen and (max-width: 1000px) and (min-width: 500px)  {
        height: auto;
    .cardsdiv{
        grid-template-columns: repeat(4,1fr);
        
    }
}

@media only screen and (max-width: 499px) and (min-width: 0px)  {
    height: auto;
    .cardsdiv{
        grid-template-columns: repeat(2,1fr);
       
    }
}
`

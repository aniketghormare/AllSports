import React from 'react'
import styled from "styled-components"
import blue from "../images/blueback.png"
import whiteimg from "../images/whiteimg.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Mascot = () => {
    return (
        <DIV>
            <div className='conatiner'>
                <div className='content'>
                    <div className='maincontent'>
                        <p className='p1'>HI!, I AM</p>
                        <p className='p2'>THE
                        </p>
                        <p className='p2' style={{ marginTop: "-15px" }}>MASCOT</p>
                        <p>Meet Himalayan Monal, The Mascot for the 38th National Games Uttarakhand 2024.
                            Known as the Impeyan Monal. This bird is also the state bird of Uttarakhand.</p>
                        <br />
                        <button className='btn'>Meet Mascot <FaArrowRightLong /></button>

                    </div>
                </div>
                <div className='imgdiv'>
                    <img src={blue} height={"100%"} width={"100%"} alt="" />
                    <img className='whiteimg' src={whiteimg} height={"80%"} width={"50%"} alt="" />
                </div>
            </div>
        </DIV>
    )
}

export default Mascot


const DIV = styled.div`
    height: 500px;
    width: 100%;
    /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
    .conatiner{
        height: 80%;
        width: 90%;
        /* border: 1px solid red; */
        display: flex;
        border-radius: 17px;
        background-color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .content{
        width: 60%;
        height: 100%;
        /* border: 1px solid blue; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .imgdiv{
        width: 40%;
        height: 100%;
        /* border: 1px solid blue; */
        position: relative;
    }
    .whiteimg{
        position: absolute;
        background-color: transparent;
       left: 102px;
       top: 30px;
      
    }
.maincontent{
    height: 80%;
    width: 80%;
    /* border: 1px solid red; */
    
}
.p1{
    font-size: 25px;
    color: #81378F;
}

.p2{
    font-size: 60px;
    font-weight: 760;
    color: #81378F;
}

.btn{
        height: 35px;
      border-radius: 50px;
      /* background-color: white; */
      padding: 6px;
      background-color: #BB0490;
      color: white;
      width: 150px;
;
    }

    @media only screen and (max-width: 1000px) and (min-width: 500px)  {
 
    }

@media only screen and (max-width: 499px) and (min-width: 0px)  {
 height: 400px;
    .conatiner{
    flex-direction: column;
    height: auto;
 }
 .content{
    width: 100%;
    height: auto;
 }
 .maincontent{
    height: auto;
 }
 .imgdiv{
    display: none;
 }
 .p2{
    font-size: 50px;
    font-weight: 760;
}
}
`

import React from 'react'
import styled from "styled-components"
import man from "../images/man.png"
import eye from "../images/eye.png"
import san from "../images/san.png"
const Footer = () => {
    return (
        <DIV>
            <div className='topfooter'>
                <div className='maincontentdiv'>
                    <div className='one'>
                        <img src={san} width={"100%"} alt="" />
                        <p style={{ color: "white" }}>DOWNLOAD the App</p>
                    </div>
                    <div className='two'>
                        <h4>National Games 2024</h4>
                        <ul>
                            <li>Home</li>
                            <li>Schedule and Results</li>
                        </ul>
                    </div>
                    <div className='three'>
                        <div className='threeone'>SPORTS</div>
                        <div className='threetwo'>
                            <div className='threetwoone'>

                                <ul>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                </ul>
                            </div>
                            <div className='threetwotwo'>

                                <ul>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                </ul>
                            </div>
                            <div className='threetwothree'>

                                <ul>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                    <li>Home</li>
                                    <li>Schedule and Results</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='four'>
                        <h4>National Games 2024</h4>
                        <ul>
                            <li>Home</li>
                            <li>Schedule and Results</li>
                            <li>Home</li>
                            <li>Schedule and Results</li>
                            <li>Home</li>
                            <li>Schedule and Results</li>
                            <li>Home</li>
                            <li>Schedule and Results</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='btndiv'>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", }}>
                    <div className='round'><img src={man} height={"20px"} width={"20px"} alt="" /></div>
                    <button style={{ height: "80%", width: "150px", color: "black", fontWeight: "760" }}>HELPLINE</button>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                    <div className='round' style={{ position: "absolute", right: "150px" }}><img src={eye} height={"20px"} width={"20px"} alt="" /></div>
                </div>
            </div>
            <div className='foot'>
                <p>Copyright © Uttarakhand National Games organizing committee</p>
                <div style={{ display: "flex" }}>
                    <p>Visitors : 5553232</p>
                    <p style={{ marginLeft: "18px" }}>PRIVACY</p>
                </div>
            </div>
        </DIV>
    )
}

export default Footer

const DIV = styled.div`
    height: 500px;
    width: 100%;
    /* border: 1px solid #011d46; */
    background-color: #0C2E5E;
    position: relative;
    .foot{
        height: 10%;
        width: 100%;
        /* border: 1px solid #011d46; */
        position: absolute;
        bottom: 0;
        background-color: #011d46;
        display: flex;
        align-items: center;
        color: white;
        justify-content: space-around;
    }
    .btndiv{
        height: 10%;
        width: 100%;
        /* border: 1px solid red; */
        position: absolute;
        bottom: 50px;
        display: flex;
        align-items: center;
        
    }
    .btndiv>div{
        width: 50%;
        height: 100%;
        /* border: 1px solid green; */
    }
    .round{
        height: 100%;
        width: 50px;
        /* border: 1px solid red; */
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #81378F;
        margin-left: 110px;
    }
    .topfooter{
        height: 400px;
        width: 100%;
        /* border: 1px solid green; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul{
        list-style: none;
    }
    .maincontentdiv{
        height: 90%;
        width: 90%;
        /* border: 1px solid red; */
        display: flex;
    }
    .one{
        height: 100%;
        width: 20%;
        /* border: 1px solid green; */
        padding: 8px;
    }
    .two{
        height: 100%;
        width: 20%;
        /* border: 1px solid green; */
        color: white;
        padding: 8px;
        
    }
    .three{
        height: 100%;
        width: 40%;
        /* border: 1px solid green; */
    }
    .four{
        height: 100%;
        width: 20%;
        /* border: 1px solid green; */
        color: white;
        padding: 8px;
    }
    .threeone{
         height: 12%;
         width: 100%;
         /* border: 1px solid green; */
         color: white;
         display: flex;
         align-items: center;
         padding: 8px;
    }
    .threetwo{
        height: 88%;
         width: 100%;
         /* border: 1px solid green; */
         display: flex;
         color: white;
    }
    .threetwo >div{
        height: 100%;
        width: 33.33%;
        /* border: 1px solid red; */
        padding: 8px;

    }
    @media only screen and (max-width: 499px) and (min-width: 0px)  {
        .three{
            display: none;
        }
        .btndiv{
            display: none;
        }
    }
`

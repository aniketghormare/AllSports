import React from 'react';
import styled from 'styled-components';
import img from "../images/topimg.png"
import img1 from "../images/white.png"
import Navbar from './Navbar';
import { IoMdArrowForward } from "react-icons/io";
import SmallCards from './SmallCards';
import MadelTally from './MadelTally';
import Schedule from './Schedule';
import Mascot from './Mascot';
import Conversation from './Conversation';
import Sports from './Sports';
import Followus from './Followus';
import Compatitionzone from './Compatitionzone';
import PhotoGallery from './PhotoGallery';
import Sponcers from './Sponcers';
import Numbers from './Numbers';
const Topbox = () => {
    return (
        <DIV className='topcontainer'>
            <Navbar />
            <div className='whitediv'>
                <img width={"100%"} height={"100%"} src={img1} alt="image" />
            </div>
            <div className='bigbox'>
                <div>
                    <h1 className='h1'>The 38th National Games, Uttarakhand 2024</h1>
                    <div style={{ fontSize: "10px" }}>
                        Where fervour converges with brilliance! Immerse yourself in the exhilarating spectacle as athletes hailing from every corner of Uttarakhand vie for victory in a dazzling display of skill and camaraderie. Come together to commemorate our abundant sporting legacy and kindle the flame of togetherness. Brace yourself for an indelible odyssey towards sporting eminence. Prepare to dive into the excitement and witness the enchantment of the National Games hosted in Uttarakhand!
                    </div>
                    <br />
                    <button className='btn'>
                        Uttarakhand Unleashed <IoMdArrowForward />
                    </button>
                </div>
                <div className='smallparant'>
                    <div className="smallbox">
                        <div>
                            <button className='btn' style={{ borderRadius: "10px", backgroundColor: "#D7C378" }}>
                                Live Registration
                            </button>
                            <p style={{ fontSize: "20px" }}>The Game Live Registration</p>
                            <p style={{ fontSize: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <br />
                        <br />
                        <div>
                            <button className='btn' style={{ borderRadius: "10px", backgroundColor: "#D7C378" }}>
                                Live Registration
                            </button>
                            <p style={{ fontSize: "20px" }}>The Game Live Registration</p>
                            <p style={{ fontSize: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                    </div>
                </div>

            </div>
            <img width={"100%"} height={"100%"} src={img} alt="image" />
            {/* <SmallCards /> */}
            {/* <MadelTally />
            <Schedule />
            <Mascot />
            <Conversation />
            <Sports />
            <Followus />
            <Compatitionzone />
            <PhotoGallery />
            <Sponcers />
            <Numbers /> */}
        </DIV>
    );
};

export default Topbox;

const DIV = styled.div`
    height: 850px;
    width: 100%;
    border: 1px solid white;
    position: relative;
    .h1{
        font-size: 45px;
    }
    /* background-image: url("../images/topimg.png"); */
    .whitediv{
        height: 65px;
        width: 60%;
        /* border: 1px solid red; */
        position: absolute;
        top: 100px;
       left: 260px;
       background-color: white;
       border-radius: 50px;
    }
    .bigbox{
        height: 300px;
        width: 90%;
        /* border: 1px solid red; */
        position: absolute;
        top: 300px;
        left: 65px;
        display: flex;
        color: white;
        font: italic;
    }
    .bigbox>div{
        width: 50%;
        /* border: 1px solid blue; */
        height: 100%;
       
    }
    .btn{
        height: 30px;
      border-radius: 50px;
      background-color: white;
      padding: 6px;
    }
    .smallparant{
        display: flex;
        justify-content: end;
        align-items: center;
    }
    .smallbox{
        height: 210px;
        width: 300px;
        /* border: 1px solid red; */
    }
    @media only screen and (max-width: 1000px) and (min-width: 500px)  {
         .whitediv{
              left: 170px;
          }
          .bigbox{
            left: 40px;
          }
          .h1{
        font-size: 40px;
    }
          
    }

    @media only screen and (max-width: 499px) and (min-width: 0px)  {
        .whitediv{
            width: 70%;
              left: 65px;
              margin-top: -20px;
          }
          .bigbox{
            left: 20px;
            flex-direction: column;
            height: auto;
            margin-top: -140px;
          
          }
          .bigbox>div{
            width: 100%;
          }
          .smallbox{
            width: 100%;
            margin-top: 20px;
          }
          .h1{
        font-size: 40px;
    }
    }
`;

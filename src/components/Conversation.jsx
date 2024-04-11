import React from 'react'
import styled from 'styled-components';
import medalimg from "../images/medal.png"
import cricket from "../images/cricket.png"
const Conversation = () => {
    return (
        <DIV className='container1'>
            <div className='tablechild two' >
                <div className='big'>
                    <p style={{ fontSize: "14px" }}>Join the</p>
                    <p className='conv' >Conversation</p>
                    <p style={{ fontWeight: "350px" }}>#uttrakhandgames2024</p>

                    <div className='bigbox1'>
                        <div className='one'>
                            <div style={{ borderRight: "2px solid gray" }}>
                                <p style={{ fontWeight: "350" }}>ALL TOGETHER</p>
                                <div className='bottom'>
                                    <p style={{ fontSize: "30px", fontWeight: "760" }}>28</p>
                                    <p style={{ fontSize: "14px" }}>States</p>
                                </div>
                            </div>
                            <div style={{ borderRight: "2px solid gray" }}>
                                <p style={{ fontWeight: "350" }}>ALL TOGETHER</p>
                                <div className='bottom'>
                                    <p style={{ fontSize: "30px", fontWeight: "760" }}>28</p>
                                    <p style={{ fontSize: "14px" }}>States</p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: "350" }}>ALL TOGETHER</p>
                                <div className='bottom'>
                                    <p style={{ fontSize: "30px", fontWeight: "760" }}>28</p>
                                    <p style={{ fontSize: "14px" }}>States</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='second'>
                            <div style={{ borderRight: "2px solid gray" }}>
                                <p style={{ fontWeight: "350" }}>ALL TOGETHER</p>
                                <div className='bottom'>
                                    <p style={{ fontSize: "30px", fontWeight: "760" }}>28</p>
                                    <p style={{ fontSize: "14px" }}>States</p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: "350" }}>ALL TOGETHER</p>
                                <div className='bottom'>
                                    <p style={{ fontSize: "30px", fontWeight: "760" }}>28</p>
                                    <p style={{ fontSize: "14px" }}>States</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
            <div className='tablechild clild2' >
                <img className='boy' width={"100%"} height={"100%"} src={cricket} alt="" />
            </div>
        </DIV>
    )
}

export default Conversation


let DIV = styled.div`
     height: 550px;
     width: 100%;
     /* border: 1px solid red; */
    // color: red;
     display: flex;
     background-color:white;

    .tablechild{
        height: 100%;
        width: 50%;
        /* border: 1px solid green; */
    }
    .table{
       padding: 40px;
    }
    .child1{
       width: 60%;
    }
    .child2{
        width: 40%;   
    }
    .boy{
        padding: 0px 0px 0px 25px;
    }
    .two{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .big{
        height: 90%;
        width: 80%;
        /* border: 1px solid red; */
        

    }
    .conv{
        font-size: 50px;
        font-weight: 760;
        color:#81378F
    }
    .bigbox1{
        height: 370px;
        width: 100%;
        /* border: 1px solid red; */
        margin-top: 13px;
    }
    .one{
        height: 50%;
        width: 100%;
        /* border: 1px solid green; */
        display: flex;
        gap: 1px;

    }
    .one> div{
        height: 100%;
        width: 33%;
        /* border-right: 2px solid teal; */
        /* border: 1px solid teal; */
       
    }
    .second{
        height: 50%;
        width: 100%;
        /* border: 1px solid teal; */
        display: flex;
        
    }

    .bottom{
        margin-top: 80px;
    }

    .second> div{
          width: 50%;
          height: 100%;
          /* border: 1px solid red; */
    }
    @media only screen and (max-width: 1000px) and (min-width: 500px)  {
 
}

@media only screen and (max-width: 499px) and (min-width: 0px)  {
 flex-direction: column;
 height: auto;

 .tablechild{
    width: 100%;
    height: 80%;
 }
 .two{
    height: 80%;
 }
 .child1{
       width: 100%;
       height: auto;
    }
    .child2{
        width: 100%; 
        height: auto;  
    }
    .big{
        width: 90%;
    }
    .conv{
        font-size: 40px;
    }
   
    .bigbox1{
        height: 330px;
    }
    .one{
        height: 40%;
    }
    .second{
        height: 40%;
    }
    .bottom{
        margin-top: 30px;
    }
}
    
`

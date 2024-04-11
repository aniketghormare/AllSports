import React from 'react'
import styled from 'styled-components';
import goldmedat from "../images/goldmedal.png"
import boy from "../images/boy.png"
import MedalTallyTable from './MedalTallyTable';
const MadelTally = () => {
    return (
        <DIV className='container1'>
            <div className='tablechild clild1'>
                <div className='tablediv'>
                    <div className='heading'>
                        <img className='medal1' src={goldmedat} alt="" />
                        <p className='medalhead' >Medal Tally</p>
                    </div>
                    <div className='maintable'>
                        <MedalTallyTable />
                    </div>
                    <div className='tablebtn'>
                        <button style={{ backgroundColor: "#81378F", color: "white", height: "30px", borderRadius: "9px", padding: "5px" }}>REFRESH</button>
                        <button style={{ color: "white", height: "30px", borderRadius: "9px", borderColor: "#81378F", color: "#81378F", marginLeft: "15px", padding: "5px" }}>VIEW MORE</button>
                    </div>
                </div>
                {/* <img className='table' src={medalimg} width={"100%"} height={"100%"} alt="" /> */}
            </div>
            <div className='tablechild clild2'>
                <img className='boy' width={"100%"} height={"100%"} src={boy} alt="" />
            </div>
        </DIV>
    )
}

export default MadelTally


let DIV = styled.div`
     height: 550px;
     width: 100%;
     /* border: 1px solid red; */
     color: red;
     display: flex;
     background-color: #f3f3f3;
     .medal1{
        height:70%
     }
     .heading{
        height: 15%;
        width: 100%;
        /* border: 1px solid green; */
        display: flex;
        align-items: center;
        gap: 20px;
     }
     /* style={{ fontSize: "50px", fontWeight: "760", color: "#8F8250" }} */
     .medalhead{
            font-size: 50px;
            font-weight: 760;
            color: #8F8250;

     }
     .maintable{
        height: 75%;
        width: 100%;
        /* border: 1px solid green; */
     }
     .tablebtn{
        height: 10%;
        width: 100%;
        /* border: 1px solid green; */
        display: flex;
        align-items: center;
     }
     .child1{
       width: 60%;
       display: flex;
        justify-content: center;
    }
.tablediv{
    height: 90%;
    width: 90%;
    /* border: 1px solid green; */
}
    .tablechild{
        height: 100%;
        /* width: 50%; */
        /* border: 1px solid green; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .table{
       padding: 40px;
    }
   
    .child2{
        width: 40%; 
      

    }
    .boy{
        padding: 25px 0px 20px 25px;
    }
    @media only screen and (max-width: 1000px) and (min-width: 500px)  {

    }
    @media only screen and (max-width: 499px) and (min-width: 0px)  {
        flex-direction: column;
            height: auto;
       .container1 >div{
        height: auto;
       }
       .boy{
        padding: 15px 15px 15px 15px;
    }
    .maintable{
        width: 100%;
    }
    .medalhead{
        font-size: 35px;
    }
    .medal1{
       
        
       
        /* width:50% */
     }
    }
    
`

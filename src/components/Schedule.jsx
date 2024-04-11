import React from 'react'
import styled from "styled-components"
import schedule from "../images/schedule.png"
import Table from './Table'
const Schedule = () => {
    return (
        <DIV>
            <div className='headingdiv'>
                <h1 style={{ color: "rgb(172,136,167)", fontSize: "40px" }}>SCHEDULE</h1>
                <div className='select'>
                    <select name="" id="" className='select1'>
                        <option value="">Select Date</option>
                        <option value="">Select Date</option>
                        <option value="">Select Date</option>
                    </select>
                    <select name="" id="">
                        <option value="">Select Date</option>
                        <option value="">Select Date</option>
                        <option value="">Select Date</option>
                    </select>
                </div>
            </div>

            <div className='scheduletable'>
                <Table/>
                {/* <img src={schedule} height={"100%"} width={"100%"} alt="" /> */}
            </div>
        </DIV>
    )
}

export default Schedule


const DIV = styled.div`
    height: 680px;
    width: 100%;
    /* border: 1px solid red; */
    position: relative;
    .headingdiv{
        position: absolute;
        height: auto;
        width: 90%;
        /* border: 1px solid red; */
        display: flex;
        top: 60px;
        left: 70px;
    }
    .headingdiv> h1{
  width: 50%;
    }
    .headingdiv> div{
       width: 50%;
    }
    .select{
        display: flex;
        justify-content: end;
        gap: 20px;
    }
    select{
        height: 85%;
        width: 500px;
    }
    .scheduletable{
        height: 500px;
        width: 90%;
        /* border: 1px solid red; */
        position: absolute;
        left: 70px;
        top: 140px;
        
    }
    @media only screen and (max-width: 1000px) and (min-width: 500px)  {
        
        .headingdiv{
            left: 40px;
        } 
        .scheduletable{
            left: 40px;
        } 
    }

    @media only screen and (max-width: 499px) and (min-width: 0px)  {
           .headingdiv{
               left: 20px;
                flex-direction: column;
                 height: auto;
           }
           .scheduletable{
            left: 20px;
           }
           


    }
`

import React from 'react'
import styled from "styled-components"
const SmallCards = () => {
    return (
        <DIV className='main'>
            <h2 className='heading'>Latest News</h2>
            <div className='cards'>
                {
                    [1, 2, 3, 4, 5, 6].map((el, index) => {
                        return (
                            <div className='card' key={index + 1}>
                                <div className='cardimg'>
                                    <img src="https://images.unsplash.com/photo-1538477080496-24fefe5fe161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" height={'100%'} width={"100%"} alt="" />
                                </div>
                                <div className='cardcontent'>
                                    <p style={{ fontSize: "12px", fontWeight: "500" }}>Swasti Singh’s gold powers Odisha past 50 medals</p>
                                    <p style={{ fontSize: "8px" }}>Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh. </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </DIV>
    )
}

export default SmallCards


let DIV = styled.div`
    height: 280px;
    width: 100%;
    border: 1px solid red;
    position: relative;

    .heading{
        position: absolute;
        left: 70px;
       
        color: #81378F;
        margin-top: 30px;
    }

    .cards{
        height: 190px;
        width: 90%;
        border: 1px solid red;
        
        position: absolute;
       top: 80px;
       left: 70px;
       display: grid;
       grid-template-columns: repeat(3,1fr);
    column-gap: 80px;
    row-gap: 20px;
    }
     .card{
        height: 80px;
        width: 270px;
        border: 1px solid red;
        display: flex;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
     }
     .cardimg{
          width: 30%;
          height: 100%;
          padding: 5px;
          
     }
     .cardcontent{
        width: 70%;
        height: 100%;
    }

    @media only screen and (max-width: 1000px) and (min-width: 500px)  {
        height: auto;
        .cards{
            grid-template-columns: repeat(2,1fr);
            height: auto;
        }
          
    }

    @media only screen and (max-width: 499px) and (min-width: 0px)  {
        height: auto;
        .cards{
            grid-template-columns: repeat(1,1fr);
            height: auto;
            left: 20px;
        }
        .heading{
            left: 20px;
        }
        .card{
            width: 100%;
        }
    }

`

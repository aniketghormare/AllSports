import React from 'react'
import styled from "styled-components"
import { IoMdArrowBack } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
const PhotoGallery = () => {
    return (
        <DIV>
            <div className='newone'>
                <div className='container'>
                    <div className='heading'>
                        <p style={{ fontSize: "35px", color: "#81378F", fontWeight: "726" }}>Photo Gallery</p>
                        <div>
                            <button style={{ width: "30px", height: "30px", borderRadius: "50px", backgroundColor: "#BB0490", color: "white",alignItems:"center"}}><IoMdArrowBack/></button>
                            <button style={{ width: "70px", height: "30px", borderRadius: "10px", backgroundColor: "#BB0490", color: "white", marginLeft: "5px" }}><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className='cards'>
                        {
                            [1, 2, 3, 4].map((el, index) => {
                                return (
                                    <div className='card'>
                                        <img height={"80%"} width={"100%"} src="https://images.unsplash.com/photo-1491487605692-1435b9dcac08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        <p>Swasti Singh’s gold powers Odisha past 50 medals</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </DIV>
    )
}

export default PhotoGallery


const DIV = styled.div`

height: 350px;
width: 100%;
/* border: 1px solid red; */

background-color: #f3f3f3;
.newone{
    height: 350px;
width: 100%; 
display: flex;
justify-content: center;
align-items: center;
}
.container{
    height: 90%;
    width: 90%;
   /* border: 1px solid red; */
}
.heading{
    height: 30%;
    width: 100%;
    /* border: 1px solid green; */
}

.cards{
    height: 70%;
    width: 100%;
    /* border: 1px solid green; */
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
.card{
    height: 100%;
    width: 240px;
    /* border: 1px solid red; */
    padding: 5px;
}
.newone{
    background-color: white;
    border-radius: 0px 70px 0px 70px;
}
@media only screen and (max-width: 1000px) and (min-width: 500px)  {
    height: auto;
    .newone{
        height: auto;
     }
     .container{
        height: auto;
     }
    .cards{
        height: auto;
        grid-template-columns: repeat(3,1fr);
        gap: 5px;
     }
     .card{
        height: 280px;
        padding: 14px;
        width: 220px;
     }
}

@media only screen and (max-width: 499px) and (min-width: 0px)  {
    height: auto;
    
    .card{
   
        width: 170px;
  
     }
     .newone{
        height: auto;
     }
     .container{
        height: auto;
     }
     .cards{
        height: auto;
        grid-template-columns: repeat(2,1fr);
     }
     .card{
        height: 280px;
        padding: 14px;
     }

}
`

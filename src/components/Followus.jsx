import React from 'react'
import styled from 'styled-components';
import football from "../images/football.png"
import cricket from "../images/cricket.png"
const Followus = () => {
    return (
        <DIV className='container1'>
            <div className='tablechild two'>
                <div className='big'>

                    <p className='conv' >FOLLOW US</p>
                    <p className='hash' >#uttrakhandgames2024</p>



                </div>



            </div>
            <div className='tablechild clild2'>
                <img className='boy' width={"100%"} height={"100%"} src={football} alt="" />
            </div>
        </DIV>
    )
}

export default Followus


let DIV = styled.div`
     height: 400px;
     width: 100%;
     /* border: 1px solid red; */
    // color: red;
     display: flex;
     background-color:white;
.hash{
    font-weight: 500px;
    margin-top: 100px;
   
}
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
        height: 60%;
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
        border: 1px solid green;
        display: flex;
        gap: 1px;

    }
    .one> div{
        height: 100%;
        width: 33%;
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
  height: auto;
  flex-direction: column;
  
  .big{
    height: 100px;
    margin-left: -30px;
  }
  .tablechild{
    width: 100%;
  }
 
  .hash{
    font-weight: 500px;
   margin-top: 0px;
   
   
}
.conv{
    font-size: 35px;
}
.boy{
        padding: 15px 15px 15px 25px;
    }
}
    
`

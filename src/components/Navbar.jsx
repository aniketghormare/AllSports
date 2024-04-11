import React from 'react'
import styled from "styled-components"
import logo from "../images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <NAV className='nav'>
      <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
        <div  style={{height:"40px",width:"40px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50px",backgroundColor:"white"}}>
        <GiHamburgerMenu style={{color:"black"}} />
      
        </div>
        <p>Menu</p>
      </div>
      <div className='logo'>
        <img className='logoimg' height={"80%"} width={"22%"} src={logo} alt="" />
      </div>
      <div className='smallnav'>
        <p>Ticketing</p>
        <p>Shop</p>
        <p>Login</p>
        <input className='inputfield' style={{color:"white"}} placeholder='search' type="text" />
      </div>
    </NAV>
  )
}

export default Navbar


let NAV = styled.div`
    background: transparent;
    position: absolute;
    top: 15px;
    width: 90%;
    height: 50px;
    display: flex;
    color: white;
    font-weight: 400;
    
    justify-content: space-between;
    /* border: 1px solid red; */
   left: 70px;
   align-items: center;
   //position: fixed;
   .nav div{
    width: 33px;
    height: 100%;
    /* border: 1px solid blue; */
   }
   .smallnav{
     display: flex;
     gap: 10px;
   }
  .logo{
    margin-left: 20px;
  }
  .logoimg{
    margin-left: 200px;
  }
  .inputfield{
    width: 100px;
    background-color: transparent;
    color: white;
  }

  @media only screen and (max-width: 1000px) and (min-width: 500px)  {
    /* border: 1px solid blue; */
    left: 40px;
   
      
}

@media only screen and (max-width: 499px) and (min-width: 0px)  {
  /* border: 1px solid blue; */
    left: 22px;
    .logo{
      display: none;
    }
    .smallnav{
      display: none;
    }
}
`

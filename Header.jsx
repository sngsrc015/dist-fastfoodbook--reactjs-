import React,{useState} from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PersonIcon from '@mui/icons-material/Person';
import {useAuth} from '../../Autoraization/auth'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Header(props) {
  const auth =useAuth()
const navigate=useNavigate()

const items=useSelector(state=>state.foodStorage.fooditems)




const handleLogout = () => {
  auth.logout()
  navigate('/')
}

  return (
    <>
    <HeadItem >
<div className='heading'>
    <span><RestaurantIcon/></span>
    <div>Food's Restaurant</div>
</div>

<div style={{width:80,marginTop:18,paddingRight:35,display:"flex",justifyContent:"space-between"}}>
{auth.user&&(
  
      <PersonIcon onClick={handleLogout} style={{cursor:"Pointer"}} alt="Logout" />
    )}
{
   items.length-1==0?<></>:<Badge badgeContent={items.length-1} color="error" >
      <ShoppingCartIcon onClick={()=>navigate('/order')} style={{cursor:"Pointer"}} />
    </Badge>
}   
    
    </div>
    </HeadItem>
    
    
    
    
    </>
  )
}

const HeadItem=styled.div`
width:100%;
background-color:#3867d6;
height:10vh;
display:flex;
justify-content:space-between;
align-item:center;





.heading{
  width:13vw;
  display:flex
  align-item:center;
  color:#fff;
  justify-content:space-between;
  padding:1rem;
  font-weight:500;
  font-size:1rem;
  margin-left:2rem;
  
 

}

`;



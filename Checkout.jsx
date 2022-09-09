import React from 'react'
import styled from 'styled-components'
export default function Checkout() {
  return (
    <Container>
<div className="text-item">
    <div className='main_title'>
Checkout
    </div>

    <div className='subtext'>
Thank you for your order.
    </div>

</div>



    </Container>
  )
}

const Container=styled.div`

width:100%;
height:fit-content;
align-items:center;
justify-content:center;

.text-item{
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
width:60%;
height:20vh;
  margin:9.5rem ;
  display:flex;
flex-direction:column;
margin-left:16rem;

.main_title{
    font-family:nunito;
  font-weight:300;
  text-align:center;
  font-size:2rem;
 
}




}




`;


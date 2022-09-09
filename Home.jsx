import Button from '@mui/material/Button';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function Home() {
  const navigate=useNavigate()

  var result = JSON.stringify(localStorage.getItem("formValues"));
  const obj = JSON.parse(result);
  var val=JSON.parse(obj)

console.log(val)
  // const data = JSON.parse(obj);



  return (<>
  <ContentItem>
    
    <div className='title'>Welocme to Food's Kitchen</div>
   <div className='btn'> <Button variant="contained"
    onClick={()=>navigate('/card')}
    style={{
      backgroundColor:"#3867d6",
      width:140,
      fontSize:15,
      fontWeight:500
    }}>Go To Menu</Button></div>

    </ContentItem>  </>
  )
}

const ContentItem=styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-top:4.5rem;

.title{
  width:60%;
font-family:nunito;
  font-weight:300;
  text-align:center;
  font-size:5rem;

}

.btn{
  margin-top:2rem;
}
`;
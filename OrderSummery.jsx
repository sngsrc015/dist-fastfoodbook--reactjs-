import React,{useState} from "react";
import { Button, Divider } from '@mui/material';
import { useSelector } from "react-redux";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function OrderSummery() {
  const [sum,setSum]=useState()

  const navigate=useNavigate();
  const items=useSelector(state=>state.foodStorage.fooditems)
  var to=[]

  const showPrice=()=>{
    var sum = to.reduce(function(a, b) { return a + b; }, 0);
   return(sum)
    
  }
  
  

 const  gridItem=()=>{


  const datm = items.filter(ele => {
     return ele.option!==''

});


const Total=datm.map((e,index)=>{
var mul=e.cost*e.value;

  to.push(mul)

  

 
})










 return(
 datm.map((item,index)=>{
console.log(index,item.id)
  
    return(
      <>
      <div key={index}  className="totalamt"
            style={{
              width:280,

              display: "flex",
              alignItems:"center"
,marginTop:35,
fontWeight:300,
fontSize:15,
fontFamily:"Questrial",
textAlign:"center",
cursor:"pointer",
color:"#2d3436",
              justifyContent: "space-between",
            }}>
        <div>{item.id+1}:{item.option}</div>
        <div>{item.value}</div>
        <div>{item.value*item.cost}</div>
        
        
        
        </div>    </>
    )
  
  })
 )
}



  return (
    <Box>
      <div className="box-item">
        <div className="item-list">
          <div
            className="title"
            style={{
              fontWeight: 300,
              fontSize: 12,
              fontFamily: "nunito",
              color: "#636e72",
            }}
          >
            <h1>Order Summary</h1>
          </div>

          <div
            className="menu-item"
            style={{
             position:"absolute"
            }}
          >
       {gridItem()}
          </div>

      
          <div className="totalprice" style={{   display: "flex",
              alignItems:"center",justifyContent:"space-between",
              marginTop:246,
              position:"relative",
            }} >
            <div style={{
     fontWeight:700,
     fontSize:17,
     fontFamily:"Questrial",
     cursor:"pointer",
     color:"#2d3436",
}}>Total</div>
     <div style={{
     fontWeight:700,
     fontSize:17,
     fontFamily:"Questrial",
     cursor:"pointer",
     color:"#2d3436",
   }}>
     {showPrice()}
      </div>
      
      </div> 
          
<div style={
  {
    position:"absolute",
    marginBottom:100,
    zIndex:1
  }
}>
     
<Divider style={{ marginTop:48,alignItems:"center",position:"relative",
width:300}}/>
<div  className='btn' style={{
    marginTop:35
}}>
<Button variant="contained"
    // onClick={()=>navigate('/card')}
    size="small"
    style={{
      backgroundColor:"#e84393",
      width:300,
      fontSize:15,
      fontWeight:500
    }}
    
    onClick={()=>navigate('/final')}>Save & Order</Button>
</div>
</div>
   

        </div>
      </div>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;

  height: 100vh;

  .box-item {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 3rem;
    margin-left: 28rem;
    margin-top: 1.5rem;
    border-radius: 12px;
    width: 23%;
    height: 63vh;
    display: flex;
    flex-direction: column;
    padding-left: 12px;
    justify-content: space-around;
position:absolute;
    .item-list {
      width: 80%;

      padding: 1rem;
      margin-top:40px;
      position:absolute;
      height:80vh;
      

      
    }
  }
`;

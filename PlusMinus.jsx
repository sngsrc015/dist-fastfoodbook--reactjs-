import React,{useState} from 'react'
import { Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material'

export default function PlusMinus(props) {
const [value,setValue]=useState(props.value || 0);
const [bgcolor,setBgColor]=useState("");
const [disable,setDisable]=useState(true);

const handleColor=()=>{
    var p=value;

    if (p==2)
    {setDisable(false)
     setBgColor("#FC427B")
    }





  }

const handlePlus=()=>{
var c=value
c=c+1
setValue(c)
props.onChange(c)

}


const handleMinus=()=>{

  var c=value
  c=c-1;
  if(c>=1)
setValue(c)
props.onChange(c)



  
}

  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        width:135,
        padding:12
    }} >{value}
        <div>
        <Button variant="contained"
        onClick={handlePlus}
       
        style={{
          backgroundColor:"#3867d6",
          width:40,
          fontSize:25,
          fontWeight:500
        }}><AddIcon  onClick={handleColor} /></Button>
        </div>
    
        <div>
        <Button variant="contained"
                onClick={handleMinus}
        style={{
   backgroundColor:`${bgcolor}`,
          width:40,
          fontSize:25,
          fontWeight:500
        }}><RemoveIcon /></Button>
        </div>
    
    </div>
  )
}

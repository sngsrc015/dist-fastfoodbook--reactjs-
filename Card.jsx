import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../Data/feeds.json";
import { addItem ,removeItem} from "../redux/items";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlusMinus from "./PlusMinus";
import { useSelector } from "react-redux";
export default function Card(props) {
  const items=useSelector(state=>state.foodStorage.fooditems)
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);



  const totalCost = () => {};

  useEffect(function () {}, [!refresh]);

  return (
    <CardItem>
      {data.map((item, index) => {
        item['value']=0;
        return (

          <>
            <div className="card_item">
              <div>
                <img src={item.image} width={260} height={160}  style={{position:"relative",marginBottom:105}}/>
              </div>

              <div
                style={{
                  padding: 20,
                  marginTop:105,
                  position:"absolute"
                }}
              >
                <div className="item-name">{item.name}</div>
                <div
                  className="item-price"
                  style={{
                    marginTop: 10,
                  }}
                >
                  Price:{item.price}
                </div>

                <div >
                  {
items.map(ele=>{
  
  try{
    if(ele.id===index)
    {
      return(<>      <div>Total:{ele.value}</div>
  <span>cost(INR):{ele.value*ele.cost}</span></>


)

  }
  }
  catch{
    
    return(
<span>hiii</span>
)
  }
}
)
                  }



                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 135,
                  padding: 12,position:"relative"
                }}
              >
                <div>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#3867d6",
                      width: 40,
                      fontSize: 25,
                      fontWeight: 500,
                    }}


                    onClick={()=>{
                      dispatch(addItem({ id: index, option: item.name, value: 1, cost: parseInt(item.price) }))
                    }}
                  >
                    <AddIcon />
                  </Button>
                </div>

                <div>
                  <Button
                    variant="contained"
                    style={{
                      width: 40,
                      fontSize: 25,
                      fontWeight: 500,
                    }}
                    onClick={()=>{
                      dispatch(removeItem({ id: index, option: item.name, value: 1, cost: parseInt(item.price) }))
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </CardItem>
  );
}

const CardItem = styled.div`
  width: 92%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  margin-left: 5rem;

  .card_item {
    width: 20vw;
    height: 51vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-top: 3rem;
    .item-name {
      font-family: nunito;
      font-weight: 700;
      font-size: 1rem;
    }

    .item-price {
      font-family: nunito;
      font-weight: 500;
      font-size: 0.9rem;
    }
  }
`;

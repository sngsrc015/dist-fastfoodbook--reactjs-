import React,{useState} from 'react';
import styled from 'styled-components'
import Card from '../Tools/Card'
import data from '../Data/feeds.json'
export default function MenuItem() {
 
  return (
    <MenuBar>

    <Card />
    </MenuBar>
  )
}

const MenuBar=styled.div`
width:100%:
align-items:center;
justify-content:center;
margin:2rem 8rem;


`;
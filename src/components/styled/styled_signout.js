import styled from "styled-components";
import { Link } from 'react-router';


export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.img`
  height: auto;
  width: 10vw;
`
export const Message = styled.h1`
  font-family: sans-serif;
`
export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 70%;
  color: #444;
  height: 50px;
  width: 15vw;
  margin: 5px;
  background-color: #fff;
  border: solid 3px #444;
  transition: background-color .3s ease-out;

  &: hover{
    background-color: #444;
    color: #ddd;
  }
  &: focus{
    outline: 0;
  }
`

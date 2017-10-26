import styled from "styled-components";
import grid from '../../assets/img/grid.png';

export const DaFocusPoll = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 5px;
  width: 95%;
  box-sizing: border-box;
  background-image: url(${grid});
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 600px){
    margin: 0px;
    display: block;
    width: 100%;
    background-color: #ddd;
  }
  @media (min-width: 601px){
    height: 50
  }
`
export const PollContainer = styled.div`
  width: 100%;
  @media (min-width: 600px){

  }
`
export const PollTitle = styled.h1`
  font-family: sans-serif;
  text-align: center;
`
export const DaContainer= styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 10px;
  padding-top: 0px;
`
export const ButtonContainer = styled.div`
  display: flex;
  width: 95%;
  height: 30%;
  margin-top: 10px;
  border-top: solid gray 5px;
  justify-content: center;
  flex-direction: column;
`
export const Button = styled.button`
  display: flex;
  flex: 1 1 auto;
  width: 40%;
  margin: 5px;
  border: none;
  font-family: sans-serif;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  &: hover {
    background-color: #005f5f;
    text-decoration:none;
  }
`
export const DaOptionBar = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 40%;
  background-color: #fee;
  margin: 5px;
`
export const OptionInput = styled.input`
  border: none;
  box-sizing: border-box;
  width: 70%;
  &: focus{
    border-style:none;
    outline: none;
    outline-width: 0px;
    background-color: #eee;
  }
`
export const OptionButton = styled.button`
  height: 30px;
  width: 40px;
  box-sizing: border-box;
  font-weight: bold;
  float: right;
  border: none;
  background-color: #2ecc71;
  color: white;
  margin: 0px;

  &:hover{
    background-color: #27ae60;
  }
`

import styled from "styled-components";
import grid from '../../assets/img/grid.png';

export const DaFocusPoll = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 5px;
  width: 100%;
  height: 100vh;
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
    height: 100%
  }
`
export const PollContainer = styled.div`
  width: 65vw;
  @media (min-width: 600px){

  }
`
export const PollTitle = styled.h1`
  font-family: sans-serif;
  text-align: center;
  color: #444;
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
  flex:auto;
  height: 30%;
  background-color:#999;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-left: 3px;
  border-top: solid #aaa 5px;
  justify-content: center;
  flex-flow: row wrap;
`
export const Button = styled.button`
  display: flex;
  width: 250px;
  height: 40px;
  margin: 5px;
  border: none;
  font-family: sans-serif;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  transition: background-color .3s ease-out;
  &: hover {
    background-color: #555;
    color: white;
    text-decoration:none;
  }
`
export const DaOptionBar = styled.div`
  display: flex;
  width: 250px;
  height: 40px;
  margin: 5px;
`
export const OptionInput = styled.input`
  border: none;
  box-sizing: border-box;
  height: 40px;
  width: 200px;
  &: focus{
    border-style:none;
    outline: none;
    outline-width: 0px;
    background-color: #eee;
  }
`
export const OptionButton = styled.button`
  height: 40px;
  width: 50px;
  flex: 4 4 auto;
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

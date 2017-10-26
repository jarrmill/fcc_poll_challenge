import styled from 'styled-components';
import grid from '../../assets/img/grid.png';

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`
export const MainDisplay = styled.div`
  background-color: grey;
  width: 100vw;
  max-height: 800px;
  padding: 20px;
  background-image: url(${grid});

`
export const PollContainer = styled.div`
  margin: auto;
  width: 60%;
`
export const PollsContainer = styled.div`
  display: flex;
  flex-direction : row;
`
export const PollDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 25%;
  height: 350px;
  margin: 5px;
  border: solid 2px #eee;
`
export const PollBody = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  height: 95%;
  width: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #ccc;
`
export const PollTitle = styled.h1`
  text-align: center;
  font-family: sans-serif;
`
export const PollButton = styled.button`
  height 50px;
  width: 50%;
  background-color: #ff4d4d;
  border: none;
  color: white;
  font-size: 105%;
  box-shadow: 2px 2px 2px grey;
  &: hover{
    background-color: #ee3c3c;
    color: #eee;
    border: none;
    box-shadow: 1px 0px 1px #363d47;
    transform: translate(0px, 1px);
  }
`
export const AddNewButton = styled.button`
  border: dashed 5px #aaa;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  height: 95%;
  width: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #ccc;
`

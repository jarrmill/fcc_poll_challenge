import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`
export const MainDisplay = styled.div`
  background-color: grey;
  width: 80%;
  max-height: 800px;

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
  height: 240px;
  background-color: blue;
  margin: 5px;
`
export const PollBody = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  height: 95%;
  width: 95%;
  flex-direction: column;
  align-items: space-around;
  background-color: grey;
`
export const PollTitle = styled.h1`
  text-align: center;
  font-family: sans-serif;
`

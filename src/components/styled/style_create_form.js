import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 70%;
  width: 70%;
  background-color: #ddd;
`
export const TitleInput = styled.input`
  width: 60%;
  height: 40px;
  background-color: white;
  margin-bottom: 10px;
`
export const TitleTitle = styled.h1`
  font-family: "Verdana", sans-serif;
  font-weight: thin;
  font-size: 140%;
  border-bottom: 2px solid grey;
`
export const EntryRow = styled.div`
  height: 30px;
  width: 80%;
  background-color: yellow;
  margin-bottom: 5px;
`
export const EntryInput = styled.input`
  border: none;
  height: 30px;
  box-sizing: border-box;
  width: calc(100% - 40px);
  &: focus{
    border-style:none;
    outline: none;
    outline-width: 0px;
    background-color: #eee;
  }
`
export const RemoveButton = styled.input`
  height: 30px;
  width: 40px;
  box-sizing: border-box;
  font-weight: bold;
  float: right;
  border: none;
  background-color: #e74c3c;
  color: white;
  margin: 0px;

  &:hover{
    background-color: #c0392b;
  }
`
export const ButtonRow = styled.div`
  display: flex;
`
export const DaButton = styled.input`
  display: block;
  height: 70px;
  width: 25%;
  margin: 5px;
  background-color: #ddd;
  border: solid 3px #444;
  transition: background-color .3s ease-out;
  transition: color .3s ease-out;

  &: hover{
    background-color: #444;
    color: #ddd;
  }
  &: focus{
    outline: 0;
  }
`

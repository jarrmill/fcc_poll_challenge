import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const DaForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #e68a00;
  padding-left: 5px;
  align-items: center;
  justify-content: flex-end;
  height: 80%;
  width: 30%;
`
export const DaLogo = styled.img`
  margin-top: 20px;
  width: 130px;
  height: auto;
`
export const FormTitle = styled.h3`
  color: white;
  font-size: 200%;
  font-family: sans-serif;
  padding-bottom: 2px;
  border-bottom: 2px solid #444;
`
export const FormIcon = styled.span`
  display:flex;
  justify-content: center;
  align-items: center;
  float:left;
  height:40px;
  width:40px;
  margin-bottom: 0px;
  margin-top: 5px;
  background-color:#444;
  border-radius: 10px 0px 0px 10px;
  color: white;
`
export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 80%;
`
export const FormButton = styled.button`
  height: 13%;
  width: 45%;
  margin-top: 30px;
  margin-bottom: 15px;
  border-style: none;
  border-radius: 30px;
  border: none;
  background-color: #444;
  color: white;
  font-size: 150%;
  transition: background-color .3s ease-out;
  transition: color .3s ease-out;

  &: hover{
    background-color: #333;
    color: #e68a00
  }
`
export const FormInput = styled.input`
  background-color: #fff5e6;
  border-style: none;
  box-sizing: border-box;
  border-radius: 0px 10px 10px 0px;
  color: black;
  width: calc(100% - 40px);
  height: 40px;
  margin-top: 5px;
  margin-bottom:0px;
  padding-left: 5px;
  font-size: 120%;

  &: focus{
    border-style:none;
    outline: none;
    outline-width: 0px;
    background-color: #ffe0b3;
  }
`
export const DaDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background-color: #e68a00;
  border-radius: 10px;
  color: white;
  align-items: center;
  height: 80%;
  width: 30%;
`
export const DivTitle = styled.h1`
  color: white;
  font-size: 200%;
  font-family: sans-serif;
  margin-top: 50px;
  padding-bottom: 2px;
  border-bottom: 2px solid #444;
`
export const DivRow = styled.div`
  display: flex;
  height: 20%;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding-right: 25px;
`
export const DivIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  background-color: #444;
  height: 50px;
  width: 50px;
  border-radius: 50%;

`
export const DivText = styled.text`
  width: 50%;
  text-align: center;
  font-size: 120%;
`

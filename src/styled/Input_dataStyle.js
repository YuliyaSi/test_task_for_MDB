import styled from "styled-components";

export const Input = styled.input.attrs({ type: 'text' })`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 250px;
`;

export const Select = styled.select`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 80%;
`;

export const Wrapper = styled.div`
  width: 40%;
  height: 100vh;
`

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: 1px solid papayawhip;
  border-radius: 10px;
  margin-top: 2em;
`;
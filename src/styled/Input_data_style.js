import styled from "styled-components";

export const Input = styled.input.attrs({ type: 'text' })`
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid var(--color);
  border-radius: 15px;
  width: 80%;
  height: 3rem;
`;

export const Select = styled.select`
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid var(--color);
  border-radius: 15px;
  width: 80%;
  height: 3rem;
`;

export const Wrapper = styled.div`
  p {
    margin: .5rem;
  }

  width: 40%;
  height: fit-content;
  padding: 1rem;
  background: rgba(255,255,255,0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 10px;
`

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-top: 2em;
  transition: all 500ms ease;

  &:hover {
    background-color: #e1d3bb;
    border: 1px solid transparent;
    cursor: pointer;
  }
`;
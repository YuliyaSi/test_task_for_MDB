import styled from "styled-components";

export const Input = styled.input.attrs({ type: 'text' })`
  padding: ${props => props.edit ? '0.1em 1em' : '0.5em'};
  margin: ${props => props.edit ? 0 : '0.5em 0'};
  border: 1px solid var(--color);
  border-radius: 15px;
  width: 80%;
  height: ${props => props.edit ? '1.5rem' : '3rem'};
`;

export const Select = styled.select`
  padding: ${props => props.edit ? '0.1em 1em' : '0.5em'};
  margin: ${props => props.edit ? 0 : '0.5em 0'};
  border: 1px solid var(--color);
  border-radius: 15px;
  width: 80%;
  height: ${props => props.edit ? '1.5rem' : '3rem'};
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
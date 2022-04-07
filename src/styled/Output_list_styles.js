import styled from "styled-components";

export const WrapperOut = styled.div`
  width: 50%;
  height: fit-content;
  padding: 2rem;
  background-color: #fff;
  & * {
    font-family: "Times New Roman", sans-serif;
  }
  & div {
    margin-bottom: 1rem;
    display: inline-grid;
    width: 50%;
  }
  
`;

export const Table = styled.table`
  caption {
    background-color: #fff;
    text-align: left;
    padding: .5rem;
  }
  caption span {
    margin-left: 1rem;
  }
  thead {
    border-bottom: .5px solid black;
  }

  thead td {
    background-color: var(--color);
  }

  td {
    border-right: .5px solid black;
    height: 2em;
    min-width: 3rem;
  }
  .with_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }
  Button {
    width: 1.5rem;
    height: 1.5rem;
    padding: .1rem;
    display: grid;
    place-items: center;
    margin: 0;
  }

  tfoot {
    border-top: .5px solid black;
  }
  .total {
    text-align: left;
    padding-left: 2rem;
  }
  .total Select {
    margin-left: .5rem;
    width: 15rem;
    height: 2rem;
  }
  border: 1px solid black;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  padding: 1em;
  background-color: #fff;
  margin-bottom: 1rem;
`;
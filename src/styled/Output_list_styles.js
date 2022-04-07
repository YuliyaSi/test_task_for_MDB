import styled from "styled-components";

export const WrapperOut = styled.div`
  width: 50%;
  height: fit-content;
  padding: 2rem;
  background-color: #fff;
  & * {
    font-family: "Times New Roman", sans-serif;
  }
  .editorsHolder {
    width: 100%;
    margin-bottom: 1rem;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
  .editorsHolder div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .buttons a {
    text-decoration: none;
    color: black;
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

  thead td {
    background-color: var(--color);
  }

  td {
    border: .5px solid black;
    height: 2em;
    min-width: 3rem;
  }
  .with_btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  Button {
    width: 1.5rem;
    height: 1.5rem;
    padding: .1rem;
    display: grid;
    place-items: center;
    margin: 0;
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
  
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  padding: 1em;
  background-color: #fff;
  margin-bottom: 2rem;
`;
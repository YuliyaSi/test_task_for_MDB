import styled from "styled-components";

export const WrapperOut = styled.div`
  width: 50%;
  height: 300px;
  padding: 2rem;
`;

export const Table = styled.table`
  thead {
    border-bottom: .5px solid black;
  }

  thead td {
    background-color: papayawhip;
  }

  td {
    border-right: .5px solid black;
    height: 2em;
  }

  tfoot {
    border-top: .5px solid black;
  }
  border: 1px solid black;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  padding: 1em;
  background-color: #dde1e4;
`;
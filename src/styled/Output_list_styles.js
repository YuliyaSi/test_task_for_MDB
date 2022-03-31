import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  height: 100vh;
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

  width: 100%;
  border-collapse: collapse;
  border: 1px solid;
  text-align: center;
  padding: 1em;
`;
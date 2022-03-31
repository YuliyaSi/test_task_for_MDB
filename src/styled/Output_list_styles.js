import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  height: 100vh;
`;

export const Table = styled.table`
   thead {
    border-bottom: .5px solid black;
  }
  td {
    border-right: .5px solid black;
  }
  tfoot {
    border-top: .5px solid black;
  }
  width: 100%;
  background-color: papayawhip;
  border-collapse: collapse;
  border: 1px solid;
  text-align: center;
  padding: 1em;
`;
import styled from "styled-components";

export const Container = styled.div`
  color: #797a81;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;


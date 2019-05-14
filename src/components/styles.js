import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 0px 1px 2px #ccc;

  @media print {
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  padding: 0;
  color: #525252;
  font-weight: 100;
  margin-bottom: 5px;
  margin-top: 3px;
  ${props =>
    props.bold &&
    css`
      font-weight: 400;
    `}
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 5px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  div {
    flex-grow: 1;
  }
`;

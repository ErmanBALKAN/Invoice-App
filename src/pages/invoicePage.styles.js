import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f5f8;
  width: calc(100% - 70px);
  max-height: 100vh;
  margin-left: 80px;
  margin-top: 100px;
  display: flex;
  max-width: 1400px;
  &.main-container {
    display: flex;
    justify-content: center;
    align-items:center;
  }

  @media (max-width: 1400px) {
    width: calc(100% - 70px);
    margin-left: 0;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const InvoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;

`;

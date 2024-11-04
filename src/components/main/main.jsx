import React from "react";
import Form from "./form/form";
import Preview from "./preview/preview";
import { InvoiceProvider } from "../../context/InvoiceContext";
import { Container, InvoiceContainer } from "./main.styles";

const MainContainer = () => {
  return (
    <InvoiceProvider>
      <InvoiceContainer>
        <Container>
          <Form />
          <Preview />
        </Container>
      </InvoiceContainer>
    </InvoiceProvider>
  );
};

export default MainContainer;

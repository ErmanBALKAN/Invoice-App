import React from "react";
import Form from "./form/form";
import Preview from "./preview/preview";
import { InvoiceProvider } from "../../context/InvoiceContext";
import { Container } from "./main.styles";



const MainContainer = () => {
  return (
    <InvoiceProvider>
      <Container>
        <Form />
        <Preview />
      </Container>
    </InvoiceProvider>
  );
};

export default MainContainer;

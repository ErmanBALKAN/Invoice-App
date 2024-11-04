import React from "react";
import { InvoiceProvider } from "../context/InvoiceContext";
import { Container, InvoiceContainer } from "./invoicePage.styles";
import InvoiceForm from "../components/invoice/InvoiceForm";
import InvoicePreview from "../components/invoice/InvoicePreview";

const InvoicePage = () => {
  return (
    <InvoiceProvider>
      <InvoiceContainer>
        <Container>
          <InvoiceForm />
          <InvoicePreview />
        </Container>
      </InvoiceContainer>
    </InvoiceProvider>
  );
};

export default InvoicePage;

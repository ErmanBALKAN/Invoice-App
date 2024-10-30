import React from "react";
import styled from "styled-components";

const ContainerForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1024px) {
    padding-left: 100px;
  }
`;

const FormWrapper = styled.form`
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const H5 = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: #707b7c;
  margin: 10px 0 10px 0;
`;

const Form = () => {
  return (
    <ContainerForm>
      <FormWrapper>
        <h1>New invoice #INV-71</h1>
        <H5>
          Tailor invoices for your customers, add items, and manage your acconts
          receivable efforlessly.
        </H5>

        <FormGroup>
          <Label>Issue date</Label>
          <Input type="date" />
        </FormGroup>

        <FormGroup>
          <Label>Due date</Label>
          <Input type="date" />
        </FormGroup>

        <FormGroup>
          <Label>Items</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Miktar</Label>
          <Input type="number" />
        </FormGroup>

        <FormGroup>
          <Label>Birim Fiyat</Label>
          <Input type="number" placeholder="Birim fiyatı giriniz" />
        </FormGroup>
      </FormWrapper>
    </ContainerForm>
  );
};

export default Form;

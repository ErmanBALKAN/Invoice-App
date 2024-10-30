import React from "react";
import styled from "styled-components";
import invoiceIssuer from "../../../data/invoiceIssuer";
import invoiceRecipient from "../../../data/invoiceRecipient";

const ContainerPreview = styled.div`
  max-width: 815px;
  min-width: 730px;
  background-color: white;
  width: 100%;
  height: 80%;
  padding: 2rem;
  border: 20px solid #E8E9ED;
  border-radius: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ddd;
`;

const Logo = styled.div`
  width: 150px;
  height: 60px;
`;

const InvoiceInfo = styled.div`
  display: flex;
  align-items: center;

  > div:not(:last-child) {
    padding-right: 2rem;
    margin-right: 2rem;
    border-right: 2px solid #ddd;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > div:last-child {
    text-align: right;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 70px;

  p {
    margin-top: 0.2rem;
    font-weight: 700;
    font-size: 14px;
  }

  &:last-child p {
    font-size: 18px;
  }
`;

const Label = styled.label`
  color: #666;
  font-weight: 600;
  font-size: 14px;
`;

const CompanySection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const CompanyInfo = styled.div`
  width: 45%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;

  th,
  td {
    padding: 12px 8px;
    text-align: left;
    color: #666;
    font-size: 14px;
  }

  th:not(:first-child):not(:last-child),
  td:not(:first-child):not(:last-child) {
    text-align: center;
    padding: 0 8px;
  }

  th:last-child,
  td:last-child {
    text-align: right;
  }

  th {
    font-weight: 600;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  td {
    border: none;
  }

  tbody tr:last-child td {
    border-bottom: 1px solid #eee;
  }
`;

const TableDescription = styled.td`
  width: 40%;
`;

const TotalSection = styled.div`
  margin-left: auto;
  width: 270px;
  margin-bottom: 10rem;
`;

const TotalItem = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #666;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  > span {
    font-weight: 600;
    color: #666;
  }
  > strong {
    color: #000;
    font-size: 16px;
  }
`;

const PaymentSection = styled.div`
  display: flex;
  background-color: #F4F5F8;
  padding: 1.5rem;
  border-radius: 10px;
  color: #888A90;
  div {
    width: 50%;
    &:last-child {
      padding-left: 2rem;
      width: 100%;
    }
  }
  h3 {
    color: #888A90;
    margin-bottom: 1rem;
    font-size: 15px;
  }

  p {
    display: grid;
    grid-template-columns: 110px auto;
    margin-bottom: 0.5rem;
    font-size: 12px;
    
    span:first-child {
      font-weight: 700;
      color: #555;
    }
    span:last-child {
      color: #444;
    }
  }

  > div:first-child {
    padding-right: 2rem;
    border-right: 1px solid #DDD;
    height: 80%;
  }

  > div:last-child p {
    grid-template-columns: 200px auto;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  p {
    font-size: 14px;
  color: #666;
    span {
      font-size: 13px;
      color: #888;
    }
  }
`;

const FooterLogo = styled.div`
  color: #555;
  font-size: 14px;
  display: flex;
  align-items: center; 
  gap: 0.5rem;
`;

const CompanyTitle = styled.h3`
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`;

const CompanyName = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const TaxId = styled.p`
  color: #666;
  font-size: 13px;
  margin-bottom: 12px;
`;

const ContactInfo = styled.p`
  color: #666;
  font-size: 13px;
  margin-bottom: 4px;
`;

const Preview = () => {
  const {
    name: issuerName,
    address: issuerAddress,
    email: issuerEmail,
    phone: issuerPhone,
    taxNumber: issuerTaxNumber,
  } = invoiceIssuer;

  const {
    name: recipientName,
    address: recipientAddress,
    email: recipientEmail,
    phone: recipientPhone,
    taxNumber: recipientTaxNumber,
    paymentDetails,
  } = invoiceRecipient;

  return (
    <ContainerPreview>
      <Header>
        <Logo>
          <img src="/assest/icons/logo/invoiceLogo.PNG" alt="Logo" />
        </Logo>
        <InvoiceInfo>
          <InfoGroup>
            <Label>Issued</Label>
            <p>01.01.2024</p>
          </InfoGroup>
          <InfoGroup>
            <Label>Due Date</Label>
            <p>15.01.2024</p>
          </InfoGroup>
          <InfoGroup>
            <Label>Invoice Number</Label>
            <p>INV-#71</p>
          </InfoGroup>
        </InvoiceInfo>
      </Header>

      <CompanySection>
        <CompanyInfo>
          <CompanyTitle>From:</CompanyTitle>
          <CompanyName>{issuerName}</CompanyName>
          <TaxId>{issuerTaxNumber}</TaxId>
          <ContactInfo>{issuerAddress}</ContactInfo>
          <ContactInfo>{issuerEmail}</ContactInfo>
          <ContactInfo>{issuerPhone}</ContactInfo>
        </CompanyInfo>
        <CompanyInfo>
          <CompanyTitle>To:</CompanyTitle>
          <CompanyName>{recipientName}</CompanyName>
          <TaxId>{recipientTaxNumber}</TaxId>
          <ContactInfo>{recipientAddress}</ContactInfo>
          <ContactInfo>{recipientEmail}</ContactInfo>
          <ContactInfo>{recipientPhone}</ContactInfo>
        </CompanyInfo>
      </CompanySection>

      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>VAT (%)</th>
            <th>Total excl. VAT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableDescription>Sample Item</TableDescription>
            <td>1</td>
            <td>€100.00</td>
            <td>20%</td>
            <td>€100.00</td>
          </tr>
        </tbody>
      </Table>

      <TotalSection>
        <TotalItem>
          Total excl. VAT<span>€100.00</span>
        </TotalItem>

        <TotalItem>
          Total VAT Amount<span>€20.00</span>
        </TotalItem>

        <TotalItem>
          Total incl. VAT<strong> €120.00</strong>
        </TotalItem>
      </TotalSection>

      <PaymentSection>
        <div>
          <h3>Payment Details</h3>
          <p>
            <span>Beneficiary Name</span>
            <span>{paymentDetails.BeneficiaryName}</span>
          </p>
          <p>
            <span>BIC</span>
            <span>{paymentDetails.BIC}</span>
          </p>
          <p>
            <span>IBAN</span>
            <span>{paymentDetails.IBAN}</span>
          </p>
          <p>
            <span>Reference</span>
            <span>{paymentDetails.Reference}</span>
          </p>
        </div>
        <div>
          <h3>Note</h3>
          <p>Please make the payment via wire transfer at soonest.</p>
        </div>
      </PaymentSection>

      <Footer>
        <p>{issuerName} &#8226; <span>#INV-71</span> </p>
        <FooterLogo>created with <img src="/assest/icons/logo/footerLogo.PNG" alt="Logo" /></FooterLogo>
        <p>1/1</p>
      </Footer>
    </ContainerPreview>
  );
};

export default Preview;

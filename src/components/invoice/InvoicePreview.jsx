import React from "react";
import invoiceIssuer from "../../data/invoiceIssuer";
import invoiceRecipient from "../../data/invoiceRecipient";
import {
  ContainerPreview,
  Header,
  Logo,
  InvoiceInfo,
  InfoGroup,
  Label,
  CompanySection,
  CompanyInfo,
  Table,
  TableDescription,
  TotalSection,
  TotalItem,
  PaymentSection,
  Footer,
  FooterLogo,
  CompanyTitle,
  CompanyName,
  TaxId,
  ContactInfo,
  DueAmount,
  InvoiceFooter
} from "./invoicePreview.styles";
import moment from 'moment';
import { CURRENCIES } from "../../data/formConstants";
import { useInvoice } from "../../context/InvoiceContext";

const Preview = () => {
  const { invoiceData } = useInvoice();
  const { issueDate, dueDate, items } = invoiceData;
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

  const currencySymbol = items.length > 0 
    ? CURRENCIES.find(c => c.code === items[0].currency)?.symbol || '€'
    : '€';

  const calculations = items.reduce((acc, item) => {
    const quantity = Number(item?.quantity) || 0;
    const amount = Number(item?.amount) || 0;
    const vatRate = Number(item?.vatRate) || 0;
    
    const subtotal = quantity * amount;
    const vatAmount = subtotal * (vatRate / 100);

    return {
      totalExclVat: acc.totalExclVat + subtotal,
      totalVatAmount: acc.totalVatAmount + vatAmount,
      totalInclVat: acc.totalInclVat + (subtotal + vatAmount)
    };
  }, { totalExclVat: 0, totalVatAmount: 0, totalInclVat: 0 });

  return (
    <ContainerPreview>
      <Header>
        <Logo>
          <img src="/assest/icons/logo/invoiceLogo.PNG" alt="Logo" />
        </Logo>
        <InvoiceInfo>
          <InfoGroup>
            <Label>Issued</Label>
            <p>{moment(issueDate).format('DD/MM/YYYY')}</p>
          </InfoGroup>
          <InfoGroup>
            <Label>Due Date</Label>
            <p>{moment(dueDate).format('DD/MM/YYYY')}</p>
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
          {items.map((item, index) => {
            const quantity = Number(item?.quantity) || 0;
            const amount = Number(item?.amount) || 0;
            const vatRate = Number(item?.vatRate) || 0;
            
            const total = (quantity * amount) * (1 + vatRate / 100);

            return (
              <tr key={index}>
                <TableDescription>{item.title}</TableDescription>
                <td>{quantity}</td>
                <td>{currencySymbol}{amount}</td>
                <td>{vatRate}%</td>
                <td>{currencySymbol}{total.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <TotalSection>
        <TotalItem>
          Total excl. VAT<span>{currencySymbol}{calculations.totalExclVat.toFixed(2)}</span>
        </TotalItem>

        <TotalItem>
          Total VAT Amount<span>{currencySymbol}{calculations.totalVatAmount.toFixed(2)}</span>
        </TotalItem>

        <TotalItem>
          Total incl. VAT<strong>{currencySymbol}{calculations.totalInclVat.toFixed(2)}</strong>
        </TotalItem>
      </TotalSection>
      <InvoiceFooter>
        <DueAmount>
          {currencySymbol}{calculations.totalInclVat.toFixed(2)} due {moment(dueDate).format('DD MMMM, YYYY')}
      </DueAmount>
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
        <p>
          {issuerName} &#8226; <span>#INV-71</span>{" "}
        </p>
        <FooterLogo>
          created with{" "}
          <img src="/assest/icons/logo/footerLogo.PNG" alt="Logo" />
        </FooterLogo>
        <p>1/1</p>
        </Footer>
      </InvoiceFooter>
    </ContainerPreview>
  );
};

export default Preview;

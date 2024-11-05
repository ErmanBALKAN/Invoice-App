import styled from "styled-components";

export const ContainerPreview = styled.div`
  width: 650px;
  height: 900px;
  background-color: white;
  padding: 2rem;
  border: 20px solid #E8E9ED;
  border-radius: 40px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ddd;
`;

export const Logo = styled.div`
  width: 150px;
  height: 60px;
`;

export const InvoiceInfo = styled.div`
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

export const InfoGroup = styled.div`
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

export const Label = styled.label`
  color: #666;
  font-weight: 600;
  font-size: 14px;
`;

export const CompanySection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const CompanyInfo = styled.div`
  width: 45%;
`;

export const Table = styled.table`
  width: 650px;
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

export const TableDescription = styled.td`
  width: 40%;
  font-weight: 800;
  color: #333;
`;

export const TotalSection = styled.div`
  margin-left: auto;
  width: 270px;
  margin-top: 1rem;
`;

export const TotalItem = styled.p`
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

export const PaymentSection = styled.div`
  display: flex;
  background-color: #F4F5F8;
  padding: 1.5rem;
  border-radius: 10px;
  color: #888A90;
  div {
    width: 100%;
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
  }

  > div:last-child p {
    grid-template-columns: 200px auto;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  width: 620px;
  p {
    font-size: 14px;
  color: #666;
    span {
      font-size: 13px;
      color: #888;
    }
  }
`;

export const FooterLogo = styled.div`
  color: #555;
  font-size: 14px;
  display: flex;
  align-items: center; 
  gap: 0.5rem;
`;

export const CompanyTitle = styled.h3`
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const CompanyName = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
`;

export const TaxId = styled.p`
  color: #666;
  font-size: 13px;
  margin-bottom: 12px;
`;

export const ContactInfo = styled.p`
  color: #666;
  font-size: 13px;
`;

export const DueAmount = styled(CompanyName)`
  font-size: 1.1rem;
  font-weight: 700;
`;

export const InvoiceFooter = styled.div`
  position: absolute;
  bottom: 15px;
  width: 650px;
`;


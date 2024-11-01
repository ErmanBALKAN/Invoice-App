import styled, { keyframes } from 'styled-components';

export const ContainerForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  padding-right: 15px;
  padding-left: 70px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 1024px) {
    padding-left: 100px;
  }
`;

export const FormWrapper = styled.form`
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  ${({ variant }) => {
    switch (variant) {
      case 'bold':
        return `
          font-weight: 600;
          font-size: 16px;
        `;
      case 'light':
        return `
          color: #666;
          font-size: 14px;
        `;
      case 'h5':
        return `
          color: #6B7280;
          font-size: 16px;
          font-weight: 400;
          margin: 16px 0;
        `;
      case 'label':
        return `
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #374151;
        `;
      case 'date':
        return `
          color: #4E92CE;
          font-size: 14px;
          font-weight: 600;
          margin-top: -5px;
        `;
      case 'error':
        return `
          color: #EF4444;
          font-size: 12px;
          margin-top: 4px;
        `;
      case 'vat':
        return `
          font-size: 13px;
          margin-top: 4px;
          span {
            font-size: 13px;
            color: #6B7280;
          }
        `;
      default:
        return `
          font-size: 14px;
          color: #374151;
        `;
    }
  }}
`;


export const DateContainer = styled.div`
  background-color: #fefefe;
  padding: 16px 18px;
  border-radius: 20px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  p {
    font-size: 18px;
    color: #333;
    font-weight: 800;
    margin-top: -14px;
    padding: 0;
  }

  .react-datepicker-wrapper {
    position: absolute;
    left: 23px !important;
    input {
      visibility: hidden;
      width: 0;
      height: 0;
      position: absolute;
    }
  }
`;

export const DateDisplay = styled.div`
  font-size: 14px;
  color: #333;
  display: none;
  background-color: red;
`;

export const DateIconButton = styled.button`
  background: #f4f5f8;
  border-radius: 50%;
  position: relative;
  border: none;
  cursor: pointer;
  padding: 7px;
  display: flex;
  align-items: center;
  color: #721dd8;
  border-radius: 20px;
  svg {
    path {
      color: #721dd8;
    }
  }

  &:hover {
    color: #721dd8;
  }
`;

export const DueDateOptions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const DueDateOption = styled.button`
  flex: 1;
  padding: 8px 8px;
  border-radius: 20px;
  border: none;
  background-color: ${({selected}) => (selected ? "#4E92CE" : "#DDEAF9")};
  color: ${({selected}) => (selected ? "#fff" : "#0A68B9")};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: ${({selected}) => (selected ? "#4E92CE" : "#8FBAE1")};
  }
`;

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 2000px;
  }
`;

export const ItemSection = styled.div`
  background-color: #fefefe;
  padding: 16px 18px;
  border-radius: 20px;
  animation: ${slideDown} 0.8s ease forwards;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h3 {
    font-weight: 700;
    margin: 0;
    font-size: 18px;
    &:last-child {
      font-size: 16px;
    }
  }

  svg {
    background-color: #F4F5F8 ;
    padding: 10px;
    border-radius: 50%;
  }
`;

export const ItemInputGroup = styled.div`
  padding: 15px;
  border-radius: 10px;
`;

export const CombinedInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #e8e9ed;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const AmountInputContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const CurrencySymbol = styled.span`
  position: absolute;
  left: 14px;
  top: 16.5px;
  color: #000;
  font-weight: 700;
  font-size: 30px;
`;

export const AmountInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;

  padding: 8px 12px;
  padding-left: 35px;
  border: none;
  background: transparent;
  font-size: 28px;
  font-weight: 700;
  width: 100%;
  text-align: left;
  margin-top: 10px;
  outline: none;

  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  &::placeholder {
    color: #999;
    font-size: 30px;
    font-weight: 700;
  }
`;

export const CurrencySelectWrapper = styled.div`
  position: relative;
  width: 95px;
  height: 80px;
`;

export const StyledSelect = styled.select`
  padding: 4px 6px 4px 35px;
  margin-top: 26px;
  border: none;
  background: #f4f5f8;
  cursor: pointer;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  border-radius: 15px;
  appearance: none;
  width: 75px;

  &:focus {
    outline: none;
  }
`;

export const FlagImage = styled.img`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 20px;
  object-fit: contain;
`;

export const ItemRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  height: 70px;
`;

export const ItemError = styled.div`
  margin-top: -10px;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;

export const ItemInput = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  flex: ${(props) => props.flex || 1};
  text-align: start;
  font-weight: 600;
  border: none;
  width: 100%;
  background-color: #e8e9ed;
  font-size: 18px;
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  &[type="number"] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  &::placeholder {
    color: #666;
    font-size: 14px; /* Reduced placeholder font size */
  }
`;

export const VatOptions = styled(DueDateOptions)`
  margin-top: 5px;
  display: block;
  h3 {
    font-size: 12px;
    font-weight: 700;
  }
`;

export const VatOption = styled(DueDateOption)`
  background-color: "#4E92CE";
  margin-right: 15px;
`;

export const CustomVatInput = styled(ItemInput)`
  width: 30px;
  margin-left: 10px;
  height: 6px;
  padding: 6px 4px;
  background-color: #DDEAF9;
  font-size: 14px;
  color: #4E92CE;
  font-weight: 700;
`;

export const ToggleSection = styled.div`
  background-color: #FEFEFE;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: opacity 0.3s ease;
  
  &:hover {
    background-color: #F8F8F8;
  }
  
  svg {
    background-color: #F4F5F8 ;
    padding: 10px;
    border-radius: 50%;
  }
`;

export const ItemsContainer = styled.div`
  position: relative;
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #5a00fe;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 15px;
`;

export const ItemSummary = styled.div`
  padding: 1rem;
  background-color: #FEFEFE;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const ItemSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemSummaryHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemInitial = styled.div`
  margin-right: 10px;
  background-color: #F0F0F0;
  padding: 10px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemDetails = styled.span`
  display: flex;
  flex-direction: column;
`;

export const ItemPricing = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AddMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
  color: #0A68B9;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
  svg {
    path {
      color: #0A68B9;
    }
  }
`;
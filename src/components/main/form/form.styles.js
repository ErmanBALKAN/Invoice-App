import styled from "styled-components";

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

export const Label = styled.label`
  display: block;
  margin: 0.7rem 0;
  font-weight: 600;
`;

export const H5 = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: #707b7c;
  margin: 10px 0 10px 0;
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

export const DateLabel = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const DateText = styled.div`
  color: #0a68b9;
  font-size: 14px;
  margin-top: -15px;
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
  background-color: ${(props) => (props.selected ? "#4E92CE" : "#DDEAF9")};
  color: ${(props) => (props.selected ? "#fff" : "#0A68B9")};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.selected ? "#4E92CE" : "#8FBAE1")};
  }
`;

export const ItemSection = styled.div`
  background-color: #fefefe;
  padding: 16px 18px;
  border-radius: 20px;
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
  top: 15px;
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
  width: 80px;
  margin-left: 10px;
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

export const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;
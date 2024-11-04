import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {
  ContainerForm,
  FormWrapper,
  FormGroup,
  Text,
  DateContainer,
  DatePickerWrapper,
  DateDisplay,
  DateIconButton,
  DueDateOptions,
  DueDateOption,
  ItemSection,
  ItemHeader,
  ItemInputGroup,
  CombinedInputWrapper,
  AmountInputContainer,
  CurrencySymbol,
  AmountInput,
  CurrencySelectWrapper,
  StyledSelect,
  FlagImage,
  ItemRow,
  ItemInput,
  VatOptions,
  VatOption,
  CustomVatInput,
  AddButton,
  ItemError,
  ToggleSection,
  ItemsContainer,
  ItemSummary,
  ItemSummaryContent,
  ItemSummaryHeader,
  ItemInitial,
  ItemDetails,
  ItemPricing,
  AddMoreButton,
} from "./invoiceForm.styles";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CURRENCIES, VAT_OPTIONS, DUE_DATE_OPTIONS } from "../../data/formConstants";
import { CiCalendarDate } from "react-icons/ci";
import { LuArchive } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import schema from "./validationSchema";
import Swal from "sweetalert2";
import { useDateHandling } from "../../hooks/useDateHandling";
import { useInvoice } from "../../context/InvoiceContext";


const Form = () => {
  const [isItemsVisible, setIsItemsVisible] = useState(true);
  const [showItemInputs, setShowItemInputs] = useState(false);
  const [isCustomVat, setIsCustomVat] = useState(false);
  const { register, control, handleSubmit, watch, setValue, formState: { errors }, reset, trigger, clearErrors } = useForm({ resolver: yupResolver(schema),
    defaultValues: {
      issueDate: moment().startOf("day").toDate(),
      dueDate: moment().startOf("day").add(15, "days").toDate(),
      items: [
        {
          amount: undefined,
          currency: "EUR",
          quantity: undefined,
          title: "",
          vatRate: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "items",
  });

  const {
    issueDate,
    setIssueDate,
    isOpen,
    setIsOpen,
    dueDate,
    dueDateOption,
    isDueDatePickerOpen,
    setIsDueDatePickerOpen,
    getDateDisplay,
    handleIconClick,
    handleDueDateOption,
    handleCustomDateChange,
  } = useDateHandling();

  const { setInvoiceData } = useInvoice();

  useEffect(() => {
    const subscription = watch((formData) => {
      setInvoiceData({
        issueDate: issueDate,
        dueDate: formData.dueDate,
        items: formData.items,
      });
    });

    return () => subscription.unsubscribe();
  }, [watch, setInvoiceData, issueDate]);

  const onSubmit = (data) => {
    const submissionData = {
      ...data,
      items: data.items.slice(data.items.length, -1)
    };
    
    console.log(submissionData);
    Swal.fire({
      title: 'Invoice Created!',
      text: `Your invoice has been created.`,
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      reset();
      setIsItemsVisible(true)
    });
  };

  const handleAddItem = async () => {
    const isValid = await trigger(`items.${fields.length - 1}`);
    if (isValid) {
      append({
        amount: 1,
        currency: "EUR",
        quantity: 1,
        title: 1,
        vatRate: 10,
      });
      setShowItemInputs(false);
    }
  };

  const handleShowInputs = () => {
    setValue(`items.${fields.length - 1}`, {
      amount: undefined,
      currency: "EUR",
      quantity: undefined,
      title: "",
      vatRate: "",
    });
    setShowItemInputs(true);
  };

  const handleToggleClick = () => {
    setIsItemsVisible(false);
    setShowItemInputs(true);
  };

  return (
    <ContainerForm>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <h1>New invoice #INV-71</h1>
        <Text $variant="h5">
          Tailor invoices for your customers, add items, and manage your acconts
          receivable efforlessly.
        </Text>

        <FormGroup>
          <Text $variant="label">Issue date</Text>
          <DateContainer>
            <DatePickerWrapper>
              <p>Issue date</p>
              <DateDisplay>
                {moment(issueDate).format("DD.MM.YYYY")}
              </DateDisplay>
              <DateIconButton onClick={handleIconClick}>
                <DatePicker
                  selected={issueDate}
                  onChange={(date) =>
                    setIssueDate(moment(date).startOf("day").toDate())
                  }
                  dateFormat="dd.MM.yyyy"
                  open={isOpen}
                  onClickOutside={() => setIsOpen(false)}
                  shouldCloseOnSelect={false}
                  popperClassName="some-custom-class"
                />
                <CiCalendarDate size={32} />
              </DateIconButton>
            </DatePickerWrapper>
            <Text $variant="date">{getDateDisplay(issueDate)}</Text>
          </DateContainer>
        </FormGroup>

        <FormGroup>
          <Text $variant="label">Due date</Text>
          <DateContainer>
            <DueDateOptions>
              {DUE_DATE_OPTIONS.map((option) => (
                <DueDateOption
                  key={option.value}
                  selected={dueDateOption === option.value}
                  onClick={(e) => handleDueDateOption(option.value, e)}
                >
                  {option.label}
                  {option.value === "custom" && (
                    <DatePickerWrapper>
                      <DatePicker
                        selected={dueDate}
                        onChange={(date) =>
                          handleCustomDateChange(
                            moment(date).startOf("day").toDate()
                          )
                        }
                        dateFormat="dd.MM.yyyy"
                        open={isDueDatePickerOpen}
                        onClickOutside={() => setIsDueDatePickerOpen(false)}
                        shouldCloseOnSelect={true}
                      />
                    </DatePickerWrapper>
                  )}
                </DueDateOption>
              ))}
            </DueDateOptions>
          </DateContainer>
        </FormGroup>

        <FormGroup>
        <ItemsContainer>  
          <Text $variant="label">Items</Text>
          {fields.length > 0 && fields.slice(0, -1).map((item, index) => (
            <ItemSummary key={item.id}>
              <ItemSummaryContent>
                <ItemSummaryHeader>
                  <span style={{display: "flex", alignItems: "center"}}>
                    <ItemInitial>
                      {item.title.trim().includes(' ') 
                        ? item.title.split(' ').length === 2 
                          ? item.title.split(' ').map(word => word.charAt(0).toUpperCase()).join('')
                          : item.title.charAt(0).toUpperCase()
                        : item.title.charAt(0).toUpperCase()}
                    </ItemInitial>
                    <ItemDetails>
                      <Text $variant="bold">{item.title}</Text>
                      <Text $variant="vat">{item.vatRate}% <span>&#8226; {item.vatRate === "0" ? "VAT Exempt" : item.vatRate === "10" ? "Reduced VAT" : item.vatRate === "20" ? "Standard VAT" : "Custom VAT"}</span> </Text>
                    </ItemDetails>
                  </span>
                  <ItemPricing>
                    <Text $variant="bold">
                      {CURRENCIES.find(c => c.code === item.currency)?.symbol}
                      {(item.amount * item.quantity * (1 + item.vatRate / 100)).toFixed(2)}
                    </Text>
                    <Text $variant="light">
                      {item.quantity} x {CURRENCIES.find(c => c.code === item.currency)?.symbol}{item.amount}
                    </Text>
                  </ItemPricing>
                </ItemSummaryHeader>
                {index === fields.length - 2 && fields.length < 5 && (
                  <AddMoreButton type="button" 
                    onClick={handleShowInputs}
                  >
                    <IoIosAddCircleOutline size={28} />
                    Add more items
                  </AddMoreButton>
                )}
                <Text $variant="error">
                  {fields.length >= 5 && item.id === fields[fields.length - 2].id && "For more items, please save the invoice"}
                </Text>
              </ItemSummaryContent>
            </ItemSummary>
          ))}
          
          {isItemsVisible && (
            <ToggleSection
              onClick={handleToggleClick}
              $isOpen={isItemsVisible}
            >
              <div>
                <Text $variant="bold">Items</Text>
                <Text $variant="light">Select or add items</Text>
              </div>
              <LuArchive size={24} />
            </ToggleSection>
          )}

          {showItemInputs && (
            <ItemSection>
              <ItemInputGroup key={fields[fields.length - 1].id}>
                <ItemHeader>
                  <h3>Item</h3>
                  <button 
                    onClick={() => {
                      setIsItemsVisible(!isItemsVisible)
                      setShowItemInputs(!showItemInputs);
                    }}
                    disabled={fields.length >= 2}
                  >
                    <LuArchive size={24} />
                  </button>
                </ItemHeader>

                <CombinedInputWrapper>
                  <AmountInputContainer $flex={1}>
                    <CurrencySymbol>
                      {
                        CURRENCIES.find(
                          (c) => c.code === watch(`items.${fields.length - 1}.currency`)
                        )?.symbol
                      }
                    </CurrencySymbol>
                    <AmountInput
                      {...register(`items.${fields.length - 1}.amount`, {
                        onChange: () => clearErrors(`items.${fields.length - 1}.amount`)
                      })}
                      placeholder="0"
                      type="number"
                      min="0"
                    />
                  </AmountInputContainer>

                  <CurrencySelectWrapper>
                    <FlagImage
                      src={
                        CURRENCIES.find(
                          (c) => c.code === watch(`items.${fields.length - 1}.currency`)
                        )?.src
                      }
                      alt={`${watch(`items.${fields.length - 1}.currency`)} flag`}
                    />
                    <StyledSelect {...register(`items.${fields.length - 1}.currency`)}>
                      {CURRENCIES.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code}
                        </option>
                      ))}
                    </StyledSelect>
                  </CurrencySelectWrapper>
                </CombinedInputWrapper>
                {errors.items?.[fields.length - 1]?.amount && (
                  <Text $variant="error">
                    {errors.items[fields.length - 1].amount.message}
                  </Text>
                )}
                <ItemRow>
                  <ItemInput
                    {...register(`items.${fields.length - 1}.quantity`, {
                      onChange: () => clearErrors(`items.${fields.length - 1}.quantity`)
                    })}
                    placeholder="Quantity"
                    type="number"
                    min="0"
                    $flex={1}
                  />

                  <ItemInput
                    {...register(`items.${fields.length - 1}.title`, {
                      onChange: () => clearErrors(`items.${fields.length - 1}.title`)
                    })}
                    placeholder="Title"
                    $flex={4}
                  />
                </ItemRow>
                <ItemError>
                  {errors.items?.[fields.length - 1]?.quantity && (
                    <Text $variant="error">
                      {errors.items[fields.length - 1].quantity.message}
                    </Text>
                  )}
                  {errors.items?.[fields.length - 1]?.title && (
                    <Text $variant="error">
                      {errors.items[fields.length - 1].title.message}
                    </Text>
                  )}
                </ItemError>
                <ItemHeader>
                  <h3>VAT rate</h3>
                </ItemHeader>
                <VatOptions>
                {VAT_OPTIONS.map((rate) => (
                  <VatOption
                    key={rate.value}
                    selected={watch(`items.${fields.length - 1}.vatRate`) === rate.value}
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(`items.${fields.length - 1}.vatRate`, rate.value);
                      clearErrors(`items.${fields.length - 1}.vatRate`);
                      setIsCustomVat(rate.value === "custom");
                    }}
                  >
                    {rate.value === "custom" ? (
                      <>
                        {rate.label}
                        {isCustomVat && (
                          <CustomVatInput
                            {...register(`items.${fields.length - 1}.vatRate`)}
                            type="number"
                            min="0"
                            max="100"
                            placeholder="%"
                            onChange={(e) => {
                              const value = Math.min(100, e.target.value); 
                              setValue(`items.${fields.length - 1}.vatRate`, value);
                            }}
                          />
                        )}
                        </>
                        ) : (
                        rate.label
                      )}
                    </VatOption>
                  ))}
                
                </VatOptions>
                {errors.items?.[fields.length - 1]?.vatRate && (
                  <Text $variant="error">
                    {errors.items[fields.length - 1].vatRate.message}
                  </Text>
                )}
              </ItemInputGroup>
              <AddButton type="button" onClick={handleAddItem}>
                Add Item
              </AddButton>
            </ItemSection>
          )}
        </ItemsContainer>
        </FormGroup>
        <AddButton type="submit">Continue</AddButton>
      </FormWrapper>
    </ContainerForm>
  );
};

export default Form;

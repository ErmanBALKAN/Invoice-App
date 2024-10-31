import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {
  ContainerForm,
  FormWrapper,
  FormGroup,
  Label,
  H5,
  DateContainer,
  DatePickerWrapper,
  DateDisplay,
  DateIconButton,
  DateLabel,
  DateText,
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
  ErrorText,
  ItemError,
} from "./form.styles";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDateHandling } from "./hooks/useDateHandling";
import { CURRENCIES, VAT_OPTIONS, DUE_DATE_OPTIONS } from '../../../data/formConstants';
import { useInvoice } from '../../../context/InvoiceContext';
import { CiCalendarDate } from "react-icons/ci";
import { LuArchive } from "react-icons/lu";
import schema from "./validationSchema";

const Form = () => {
  const { register, control, handleSubmit, watch, setValue,formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      issueDate: moment().startOf('day').toDate(),
      dueDate: moment().startOf('day').add(15, "days").toDate(),
      items: [
        {
          amount: undefined,
          currency: "EUR",
          quantity: undefined,
          title: "",
          vatRate: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
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

  React.useEffect(() => {
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
    console.log(data);
  };

  const handleAddItem = () => {
    append({
      amount: "",
      currency: "EUR",
      quantity: "",
      title: "",
      vatRate: "",
    });
  };

  return (
    <ContainerForm>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <h1>New invoice #INV-71</h1>
        <H5>
          Tailor invoices for your customers, add items, and manage your acconts
          receivable efforlessly.
        </H5>

        <FormGroup>
          <DateLabel>Issue date</DateLabel>
          <DateContainer>
            <DatePickerWrapper>
              <p>Issue date</p>
              <DateDisplay>
                {moment(issueDate).format("DD.MM.YYYY")}
              </DateDisplay>
              <DateIconButton type="button" onClick={handleIconClick}>
                <DatePicker
                  selected={issueDate}
                  onChange={(date) => setIssueDate(moment(date).startOf('day').toDate())}
                  dateFormat="dd.MM.yyyy"
                  open={isOpen}
                  onClickOutside={() => setIsOpen(false)}
                  shouldCloseOnSelect={false}
                  popperClassName="some-custom-class"
                />
                <CiCalendarDate size={32} />
              </DateIconButton>
            </DatePickerWrapper>
            <DateText>{getDateDisplay(issueDate)}</DateText>
          </DateContainer>
        </FormGroup>

        <FormGroup>
          <Label>Due date</Label>
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
                        onChange={(date) => handleCustomDateChange(moment(date).startOf('day').toDate())}
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
          <Label>Items</Label>
          <ItemSection>
            {fields.map((field, index) => (
              <ItemInputGroup key={field.id}>
                <ItemHeader>
                  <h3>Item {index + 1}</h3>
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      <LuArchive size={24} />
                    </button>
                  )}
                </ItemHeader>

                <CombinedInputWrapper>
                  <AmountInputContainer>
                    <CurrencySymbol>
                      {
                        CURRENCIES.find(
                          (c) => c.code === watch(`items.${index}.currency`)
                        )?.symbol
                      }
                    </CurrencySymbol>
                    <AmountInput
                      {...register(`items.${index}.amount`)}
                      placeholder="0"
                      type="number"
                      min="0"
                    />
                  </AmountInputContainer>

                  <CurrencySelectWrapper>
                    <FlagImage
                      src={
                        CURRENCIES.find(
                          (c) => c.code === watch(`items.${index}.currency`)
                        )?.src
                      }
                      alt={`${watch(`items.${index}.currency`)} flag`}
                    />
                    <StyledSelect {...register(`items.${index}.currency`)}>
                      {CURRENCIES.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code}
                        </option>
                      ))}
                    </StyledSelect>
                  </CurrencySelectWrapper>
                </CombinedInputWrapper>
                {errors.items?.[index]?.amount && (
                  <ErrorText>{errors.items[index].amount.message}</ErrorText>
                )}
                <ItemRow>
                  <ItemInput
                    {...register(`items.${index}.quantity`)}
                    placeholder="Quantity"
                    type="number"
                    min="0"
                    flex={1}
                  />

                  <ItemInput
                    {...register(`items.${index}.title`)}
                    placeholder="Title"
                    flex={4}
                  />
                </ItemRow>
                <ItemError>
                  {errors.items?.[index]?.quantity && (
                    <ErrorText>{errors.items[index].quantity.message}</ErrorText>
                )}
                {errors.items?.[index]?.title && (
                  <ErrorText>{errors.items[index].title.message}</ErrorText>
                )}
                </ItemError>
                <ItemHeader>
                  <h3>VAT rate</h3>
                </ItemHeader>
                <VatOptions>
                  {VAT_OPTIONS.map((rate) => (
                    <VatOption
                      key={rate.value}
                      selected={watch(`items.${index}.vatRate`) === rate.value}
                      onClick={(e) => {
                        e.preventDefault();
                        setValue(`items.${index}.vatRate`, rate.value);
                      }}
                    >
                      {rate.value === "custom" ? (
                        <>
                          {rate.label}
                          {watch(`items.${index}.vatRate`) === "custom" && (
                            <CustomVatInput
                              {...register(`items.${index}.customVatRate`)}
                              type="number"
                              min="0"
                              max="100"
                              placeholder="%"
                            />
                          )}
                        </>
                      ) : (
                        rate.label
                      )}
                    </VatOption>
                  ))}
                </VatOptions>
                {errors.items?.[index]?.vatRate && (
                  <ErrorText>{errors.items[index].vatRate.message}</ErrorText>
                )}
              </ItemInputGroup>
            ))}

            <AddButton
              type="button"
              onClick={handleAddItem}
            >
              Add Item
            </AddButton>
          </ItemSection>
        </FormGroup>
        <AddButton type="submit">Continue</AddButton>
      </FormWrapper>
    </ContainerForm>
  );
};

export default Form;

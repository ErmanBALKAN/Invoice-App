import React from "react";
import { CURRENCIES, VAT_OPTIONS } from "../constants";
import { LuArchive } from "react-icons/lu";
import {
  ItemSection,
  ItemInputGroup,
  ItemHeader,
  CombinedInputWrapper,
  AmountInputContainer,
  CurrencySymbol,
  AmountInput,
  CurrencySelectWrapper,
  FlagImage,
  StyledSelect,
  ItemRow,
  ItemInput,
  VatOptions,
  VatOption,
  CustomVatInput,
  ErrorText,
} from "../FormStyles";

const ItemList = ({ fields, register, watch, setValue, errors, remove }) => {
  return (
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

          <ItemRow>
            <ItemInput
              {...register(`items.${index}.description`)}
              placeholder="Item description"
            />
            {errors?.items?.[index]?.description && (
              <ErrorText>{errors.items[index].description.message}</ErrorText>
            )}
          </ItemRow>

          <CombinedInputWrapper>
            <AmountInputContainer>
              <CurrencySymbol>
                {CURRENCIES.find(
                  (c) => c.code === watch(`items.${index}.currency`)
                )?.symbol || '$'}
              </CurrencySymbol>
              <AmountInput
                {...register(`items.${index}.amount`)}
                placeholder="0.00"
                type="number"
                step="0.01"
              />
            </AmountInputContainer>

            <CurrencySelectWrapper>
              <StyledSelect
                {...register(`items.${index}.currency`)}
                defaultValue="USD"
              >
                {CURRENCIES.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    <FlagImage src={currency.flag} alt={currency.code} />
                    {currency.code}
                  </option>
                ))}
              </StyledSelect>
            </CurrencySelectWrapper>
          </CombinedInputWrapper>
          {errors?.items?.[index]?.amount && (
            <ErrorText>{errors.items[index].amount.message}</ErrorText>
          )}

          <VatOptions>
            {VAT_OPTIONS.map((vat) => (
              <VatOption key={vat.value}>
                <input
                  type="radio"
                  {...register(`items.${index}.vat`)}
                  value={vat.value}
                  id={`vat-${index}-${vat.value}`}
                />
                <label htmlFor={`vat-${index}-${vat.value}`}>{vat.label}</label>
              </VatOption>
            ))}
            <VatOption>
              <input
                type="radio"
                {...register(`items.${index}.vat`)}
                value="custom"
                id={`vat-${index}-custom`}
              />
              <label htmlFor={`vat-${index}-custom`}>Custom</label>
              {watch(`items.${index}.vat`) === 'custom' && (
                <CustomVatInput
                  {...register(`items.${index}.customVat`)}
                  placeholder="Enter VAT %"
                  type="number"
                  min="0"
                  max="100"
                />
              )}
            </VatOption>
          </VatOptions>
          {errors?.items?.[index]?.vat && (
            <ErrorText>{errors.items[index].vat.message}</ErrorText>
          )}
        </ItemInputGroup>
      ))}
    </ItemSection>
  );
};

export default ItemList; 
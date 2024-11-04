import { useState } from 'react';

export const useInputHandling = () => {
  const [isCustomVat, setIsCustomVat] = useState(false);

  const getVatLabel = (vatRate) => {
    switch (vatRate) {
      case "0":
        return "VAT Exempt";
      case "10":
        return "Reduced VAT";
      case "20":
        return "Standard VAT";
      default:
        return "Custom VAT";
    }
  };

  const handleVatChange = (setValue, clearErrors, fieldIndex, rate) => {
    setValue(`items.${fieldIndex}.vatRate`, rate);
    clearErrors(`items.${fieldIndex}.vatRate`);
    setIsCustomVat(rate === "custom");
  };

  const handleInputChange = (e, fieldName, setValue, clearErrors, fieldIndex, maxLength) => {
    let value = e.target.value.replace(/[eE+-]/gi, '');
    
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }

    setValue(`items.${fieldIndex}.${fieldName}`, value);
    clearErrors(`items.${fieldIndex}.${fieldName}`);
  };

  return {
    isCustomVat,
    setIsCustomVat,
    getVatLabel,
    handleVatChange,
    handleInputChange
  };
}; 
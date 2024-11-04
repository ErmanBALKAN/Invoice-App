import { useState } from 'react';
import { CURRENCIES } from '../data/formConstants';

export const useItemHandling = (fields, watch, setValue, clearErrors, trigger, append) => {
  const [isItemsVisible, setIsItemsVisible] = useState(true);
  const [showItemInputs, setShowItemInputs] = useState(false);

  const getItemInitials = (title) => {
    if (!title) return '';
    const words = title.trim().split(' ');
    if (words.length === 2) {
      return words.map(word => word.charAt(0).toUpperCase()).join('');
    }
    return title.charAt(0).toUpperCase();
  };

  const getCurrencySymbol = (currencyCode) => {
    return CURRENCIES.find(c => c.code === currencyCode)?.symbol;
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

  const calculateItemTotal = (item) => {
    return (item.amount * item.quantity * (1 + item.vatRate / 100)).toFixed(2);
  };

  return {
    isItemsVisible,
    setIsItemsVisible,
    showItemInputs,
    setShowItemInputs,
    getItemInitials,
    getCurrencySymbol,
    handleAddItem,
    handleShowInputs,
    handleToggleClick,
    calculateItemTotal,
  };
}; 
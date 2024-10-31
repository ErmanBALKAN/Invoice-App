import React, { createContext, useContext, useState } from 'react';


export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoiceData, setInvoiceData] = useState({
    issueDate: new Date(),
    dueDate: new Date(),
    items: [],
  });

  return (
    <InvoiceContext.Provider value={{ invoiceData, setInvoiceData }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoice = () => useContext(InvoiceContext);
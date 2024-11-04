import * as yup from "yup";
import { VAT_OPTIONS } from "../../data/formConstants";

const schema = yup.object().shape({
    issueDate: yup.date().required("Issue date is required"),
    dueDate: yup.date().required("Due date is required"),
    items: yup
      .array()
      .of(
        yup.object().shape({
          amount: yup
            .number()
            .transform((value) => (isNaN(value) || value === '' ? undefined : value))
            .nullable()
            .positive("Amount must be positive")
            .required("Amount is required"),
          currency: yup.string().required("Currency is required"),
          quantity: yup
            .number()
            .transform((value) => (isNaN(value) || value === '' ? undefined : value))
            .nullable()
            .positive("Quantity must be positive")
            .required("Quantity is required"),
          title: yup.string().required("Title is required"),
          vatRate: yup
            .number()
            .transform((value) => (isNaN(value) || value === '' ? undefined : value))
            .nullable()
            .test('is-valid-vat', 'Please select a VAT rate', function(value) {
              const validVatValues = VAT_OPTIONS.map(option => option.value);
              return validVatValues.includes(value) || (typeof value === 'number' && value >= 0 && value <= 100);
            })
            .test('max-100', 'VAT rate cannot exceed 100%', function(value) {
              return value <= 100;
            })
            .required('VAT rate is required'),
        })
      )
      .min(1, "At least one item is required"),
  });   
  

  export default schema;
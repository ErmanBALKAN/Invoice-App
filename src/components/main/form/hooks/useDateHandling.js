import { useState } from "react";
import moment from "moment";

export const useDateHandling = () => {
  const [issueDate, setIssueDate] = useState(moment().startOf('day').toDate());
  const [isOpen, setIsOpen] = useState(false);
  const [dueDate, setDueDate] = useState(moment().startOf('day').add(15, "days").toDate());
  const [dueDateOption, setDueDateOption] = useState("15days");
  const [isDueDatePickerOpen, setIsDueDatePickerOpen] = useState(false);

  const getDateDisplay = (date) => {
    const today = moment().startOf('day');
    const tomorrow = moment().startOf('day').add(1, "days");
    const selectedDate = moment(date).startOf('day');

    if (selectedDate.isSame(today, "day")) return "Today";
    if (selectedDate.isSame(tomorrow, "day")) return "Tomorrow";
    return selectedDate.format("DD.MM.YYYY");
  };

  const handleIconClick = (e) => {
    if (isOpen && e.target.closest(".react-datepicker")) return;
    setIsOpen(!isOpen);
  };

  const handleCustomDateChange = (date) => {
    setDueDate(moment(date).startOf('day').toDate());
    setDueDateOption("custom");
    setIsDueDatePickerOpen(false);
  };

  const handleDueDateOption = (option, e) => {
    e.preventDefault();

    if (option === "custom") {
      setIsDueDatePickerOpen(true);
      setDueDateOption("custom");
      return;
    }

    setDueDateOption(option);

    let days = 0;
    switch (option) {
      case "receipt":
        days = 0;
        break;
      case "15days":
        days = 15;
        break;
      case "30days":
        days = 30;
        break;
      default:
        days = 15;
    }

    setDueDate(
      days === 0 
        ? moment().startOf('day').toDate() 
        : moment().startOf('day').add(days, "days").toDate()
    );
  };

  return {
    issueDate,
    setIssueDate,
    isOpen,
    setIsOpen,
    dueDate,
    setDueDate,
    dueDateOption,
    isDueDatePickerOpen,
    setIsDueDatePickerOpen,
    getDateDisplay,
    handleIconClick,
    handleDueDateOption,
    handleCustomDateChange,
  };
}; 
export const setCheckedRows = (checkedRows) => {
    return {
      type: "SET_CHECKED_ROWS",
      payload: checkedRows,
    };
  };
  export const setDropdownValue = (dropdownId,value) => {
    return {
      type: 'SET_DROPDOWN_VALUE',
      payload: {dropdownId,value},
    };
  };
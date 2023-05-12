import { createStore } from 'redux';
const initialState = {
  checkedRows:[],
  checkboxesDisabled: false,
  dropdownValues: {
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
  },
};




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHECKED_ROWS':
        return {
        ...state,
        checkedRows: action.payload,
      };
      case 'SET_DROPDOWN_VALUE':
        const {dropdownId, value} = action.payload;
        if(value==="Instrument"){
          return {
            ...state,
            dropdownValues:{
              ...state.dropdownValues,
              [dropdownId]:value,
            },
            checkedRows:[],
            checkboxesDisabled:true,
          }
        }
          else{
            return{
              ...state,
              dropdownValues:{
                ...state.dropdownValues,
                [dropdownId]:value,
              },
              checkboxesDisabled:false,
            }
          }
        
        
        return state;
           
       
    default:
      return state;
  }
};


const store = createStore(reducer);

export default store;


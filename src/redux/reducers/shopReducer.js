
const initialState = [
  { id: 0, name: "Best Price", area: "Mumbai", category: "Grocery", opening:"2002-03-11" , closing:"2004-11-24"},
  { id: 1, name: "Grover Bakers", area:"Pune", category: "Baker", opening:"1998-02-23",closing:"2000-05-04"},
  {id:2, name:"Arora Chemist", area:"Ahmednagar", category:"Chemist", opening:"2012-05-21",closing:"2030-06-26"},
  {id:3, name:"Mahajan MeatShop", area:"Nashik", category:"Butcher", opening:"2005-03-16",closing:"2040-21-04"},
  {id:4, name:"Blue Bakers", area:"Solapur", category:"Baker", opening:"1999-04-14",closing:"2035-09-29"},
  {id:5, name:"Reliance", area:"Mumbai", category:"Grocery" ,opening:"2009-09-03",closing:"2012-11-20"},
  {id:6, name:"Chawla Stationary", area:"Thane", category:"Stationary" ,opening:"2004-06-15",closing:"2008-01-24"},
  {id:7, name:"Tarun Chemist", area:"Nagpur", category:"Chemist", opening:"2009-03-23",closing:"2040-12-24"},
  {id:8, name:"Prince Bakery", area:"Nashik", category:"Baker" ,opening:"2010-11-01",closing:"2014-10-24"},
];

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOP":
      state = [...state, action.payload];
      return state;
    case "DELETE_SHOP":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_SHOP":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_SHOP":
      state = [{ name: null, area: null, category: null ,opening:null,closing:null }];
      return state;
    default:
      return state;
  }
};

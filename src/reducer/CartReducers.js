export const CartReducers =(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "ADD_TO_CART":
            return {...state,CartList:payload.CartList,total:payload.tot}
        case "REMOVE_FROM_CART":
            return {...state,CartList:payload.CartList,total:payload.tot}
        case "CLEAR_CART":
  return {
    ...state,
    CartList: [],
    total: 0,
  };
        default:
           return {...state}
            
    }
}

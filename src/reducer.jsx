export const initialState={
    items:[]
}
 
export const reducer=(state,action)=>{
   
switch (action.type) {
    case 'GET MY ITEMS':
        return {...state,items:action.Lists}
     

    default:
        return state
}
}
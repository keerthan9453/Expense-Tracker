// in responce to a certain action or changes we need to see in the app.js

// reducer is a way to change your state and send it down to your components

// we need a switch called an type, whcih is like an id and we need it to see which element we are switching 
export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }    
        default:
            return state
    }
}
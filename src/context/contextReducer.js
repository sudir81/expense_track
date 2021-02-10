const contextReducer = (state, action) => {
    let transactions;
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload)
            return transactions;
        case 'ADD_TRANSACTON':
            transactions = [action.payload, ...state]
            return transactions;
        default:
            return state;
    }
}

export default contextReducer
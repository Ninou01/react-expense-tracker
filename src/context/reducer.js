export const ACTIONS = {
    ADD_TRANSACTION: "ADD_TRANSACTION",
    DELETE_TRANSACTION: "DELETE_TRANSACTION",
}

export const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TRANSACTION:
            return [newTransaction(action.payload.transaction), ...state]

        case ACTIONS.DELETE_TRANSACTION:
            return state.filter(transaction => transaction.id !== action.payload.id)

        default: 
            return state
    }

}

const newTransaction = (transaction) => {
    // const amount = transaction.amount
    return { ...transaction, id: new Date().valueOf() };
}

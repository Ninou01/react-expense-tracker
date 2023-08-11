import { createContext, useReducer } from "react";
import { reducer, ACTIONS } from "./reducer";


export const TransactionsContext = createContext()

const TransactionsProvider = ({ children }) => {

    const [transactions, dispatch] = useReducer(reducer, []);

    const addTransaction = (transaction) => {
        console.log(transaction)
        dispatch({type: ACTIONS.ADD_TRANSACTION, payload: {transaction}})
        console.log(transactions)
    }

    const deleteTransaction = (id) => {
        dispatch({type: ACTIONS.DELETE_TRANSACTION, payload: {id}})
    }


    return (
        <TransactionsContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
            { children }
        </TransactionsContext.Provider>
    )
}

export default TransactionsProvider


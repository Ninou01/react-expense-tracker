import { useState, useContext } from "react"
import { TransactionsContext } from "../context/TransactionContext"

const AddTransaction = () => {
    const { addTransaction } = useContext(TransactionsContext)
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("expense")

    const onSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            "description": description,
            "amount": +amount,
            "type": type
        }

        addTransaction(newTransaction)
        setAmount("")
        setDescription("")
        setType("expense")
    }

    return (
        <div className="add-transaction">
            <form action="" onSubmit={onSubmit}>
                <input 
                    value={amount} 
                    type="number" 
                    name="Amount" 
                    placeholder="Amount" 
                    required
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input 
                    value={description} 
                    type="text" 
                    name="Description" 
                    placeholder="Description" 
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="transaction-type">
                    <input 
                        type="radio" 
                        name="type" 
                        id="expense" 
                        checked={type === "expense"} 
                        onChange={() => {setType("expense")}}
                    />
                    <label htmlFor="expense">Expense</label>
                    <input 
                        type="radio" 
                        name="type" 
                        id="income" 
                        checked={type === "income"} 
                        onChange={() => setType("income")}
                    />
                    <label htmlFor="income">Income</label>
                </div>
                
                <div className="submit-button">
                    <input type="submit" value="Add Transaction" className="btn" />
                </div>
            </form>
        </div>
    )
}


export default AddTransaction
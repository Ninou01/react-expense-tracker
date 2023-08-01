# Expense Tracking App Documentation

## Introduction

The Expense Tracking App is a web application developed using React JS that helps users track their expenses by adding income and expense transactions. The app provides a user-friendly interface where users can add, view, and filter their transactions, allowing them to monitor their financial activities effectively.

## Features

- Add Income and Expense Transactions: Users can add income and expense transactions with details like the amount and description.
- Transaction List: The app displays a list of all transactions with their descriptions and amounts.
- Filtering Transactions: Users can search for specific transactions using the search bar to filter the transaction list.
- Real-time Balance: The app automatically calculates and updates the balance based on the income and expense transactions.

## Getting Started

1. Clone the GitHub repository for the Expense Tracking App.
2. Install the required dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open the app in your browser at `http://localhost:3000/`.

## Usage

1. **Add a Transaction**: To add a new transaction, click on the "Add Transaction" button at the top of the page. A form will appear where you can enter the amount, description, and type (income or expense) of the transaction. Click "Add Transaction" to save it.

2. **View Transactions**: All your transactions will be listed below the form. Each transaction will show its description and amount. The transactions are automatically sorted with the most recent transaction on top.

3. **Filter Transactions**: Use the search bar to filter transactions based on their descriptions. As you type in the search bar, the list of transactions will dynamically update to show only the matching ones.

4. **Balance**: The total balance is displayed at the top of the page, showing the difference between your total income and total expenses.

## Credits

The initial idea and implementation for this Expense Tracking App were inspired by the YouTube tutorial by TheIndianDev: "Build An Expense Tracker App using React JS | ReactJS Project for Beginners" (https://www.youtube.com/watch?v=q1CjHlojkVk&ab_channel=TheIndianDev).
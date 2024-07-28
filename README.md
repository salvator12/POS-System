# POS-System Overview

This project implements Chakra UI Framework to create UI Components and Redux Framework as state management.
This project only has one feature to input data in the Invoice Form page.

## Types of State Management
Several state management types are used to handle data input from the user:

### 'setDate'
This state updates the data of date based on user input.

### 'setCustomerName'
This state updates the data of the customer's name based on user input.

### 'setSalesPersonName'
This state updates the data of the sales' name based on user input.

### 'setNotes'
This state updates the data of the notes based on user input.

### 'toggleProductSelection'
This state updates the data of products that have been clicked to be selected.

### 'setProductQuantity'
This state updates the data of the product's quantity and handles the increment qty of the product selected not to exceed stock.

### 'calculateTotalAmount'
This state updates the data of the total price based on the quantity of selected products.

### 'setSearchQuery'
This state updates the data of the list of products based on what users search.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

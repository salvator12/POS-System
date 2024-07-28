// src/redux/invoiceSlice.js

import { createSlice } from '@reduxjs/toolkit';

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    date: '',
    customerName: '',
    salesPersonName: '',
    notes: '',
    products: [
      { id: 1, name: 'Soundcore R50i Wireless Earphone', price: 500000, imageURL: 'https://anker.com.sg/cdn/shop/files/blue_8e0686d7-f904-498b-a5a1-4c5c0d22b3a1.png?v=1712384674&width=1100', stock: 34, isSelected: false },
      { id: 2, name: 'Logitech G304 LightSpeed Wireless Gaming Mouse', price: 560000, imageURL: 'https://down-id.img.susercontent.com/file/id-11134207-7r98w-ltjr325czncm46', stock: 50, isSelected: false },
      { id: 3, name: 'Rexus Daxa Keyboard M71 Pro', price: 800000, imageURL: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-49060653/oem_oem_full01.jpg', stock: 20, isSelected: false },
      { id: 4, name: 'BenQ XL2720 Bowie Gaming Monitor', price: 750000, imageURL: 'https://m.media-amazon.com/images/I/716M4FUk17L._AC_UF1000,1000_QL80_.jpg', stock: 10, isSelected: false },
      { id: 5, name: 'Rexus Mouse Gaming Xierra', price: 90000, imageURL: 'https://rexus.id/cdn/shop/files/G10_1_ebfff9f6-ae5b-445c-9ceb-7912643eea9a.png?v=1705911592', stock: 40, isSelected: false },
    ],
    selectedProducts: Array(8).fill(false),
    productQuantities: Array(8).fill(1),
    totalAmount: 0,
    searchQuery: '',  // New state for search query
  },
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setCustomerName(state, action) {
      state.customerName = action.payload;
    },
    setSalesPersonName(state, action) {
      state.salesPersonName = action.payload;
    },
    setNotes(state, action) {
      state.notes = action.payload;
    },
    toggleProductSelection(state, action) {
      const index = action.payload;
      const product = state.products[index];
      if (product) {
        product.isSelected = !product.isSelected;
        state.selectedProducts[index] = product.isSelected;
        invoiceSlice.caseReducers.calculateTotalAmount(state);
      }
    },
    setProductQuantity(state, action) {
      const { index, quantity } = action.payload;
      const maxQuantity = state.products[index].stock;
      state.productQuantities[index] = Math.min(quantity, maxQuantity);
      invoiceSlice.caseReducers.calculateTotalAmount(state);
    },
    calculateTotalAmount(state) {
      state.totalAmount = state.products.reduce((total, product, index) => {
        if (state.selectedProducts[index]) {
          return total + product.price * state.productQuantities[index];
        }
        return total;
      }, 0);
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setDate,
  setCustomerName,
  setSalesPersonName,
  setNotes,
  toggleProductSelection,
  setProductQuantity,
  setSearchQuery,  // New action for search query
} = invoiceSlice.actions;

export default invoiceSlice.reducer;

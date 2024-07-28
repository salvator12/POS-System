// src/components/FormView.js

import React from 'react';
import {
  FormControl,
  FormLabel,
  VStack,
  Grid,
  GridItem,
  Input,
  Textarea,
  Box
} from '@chakra-ui/react';
import { SearchBar } from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setCustomerName, setSalesPersonName, setNotes, toggleProductSelection } from '../config/Slice';

const FormView = () => {
    const dispatch = useDispatch();
    const { date, customerName, salesPersonName, notes, selectedProducts, searchQuery, products } = useSelector((state) => state.invoice);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'date':
                dispatch(setDate(value));
                break;
            case 'customer':
                dispatch(setCustomerName(value));
                break;
            case 'sales':
                dispatch(setSalesPersonName(value));
                break;
            case 'notes':
                dispatch(setNotes(value));
                break;
            default:
                break;
        }
    };

    const handleGridItemClick = (index) => {
        dispatch(toggleProductSelection(index));
    };

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <VStack>
            <h1>Invoice Form</h1>
            <h3>Add your invoice product</h3>
            <FormControl w='50vw' isRequired>
                <VStack align='left'>
                    <FormLabel id='date' color='teal'>Invoice Date</FormLabel>
                        <Input
                            type='date' 
                            name='date'
                            value={date}
                            onChange={handleInputChange}
                            border='1px'
                            borderColor='teal'
                            borderRadius='5px'
                            padding='5px'
                        />
                    <FormLabel id='customer' color='teal'>Customer Name</FormLabel>
                        <Input 
                            placeholder='Enter customer name'
                            type='text'
                            name='customer'
                            value={customerName}
                            onChange={handleInputChange}
                            id='customer'
                            border='1px'
                            borderColor='teal'
                            borderRadius='5px'
                            padding='5px'
                        />
                    <FormLabel id='sales' color='teal'>Sales Person Name</FormLabel>
                        <Input 
                            placeholder='Enter sales person name' 
                            name='sales'
                            value={salesPersonName}
                            onChange={handleInputChange}
                            id='sales'
                            border='1px'
                            borderColor='teal'
                            borderRadius='5px'
                            padding='5px'
                        />
                    <FormLabel id='notes' color='teal'>Notes</FormLabel>
                        <Textarea 
                            placeholder='add notes'
                            name='notes'
                            value={notes}
                            onChange={handleInputChange}
                            border='1px'
                            borderColor='teal'
                            borderRadius='5px'
                            padding='5px'
                        />
                    <FormLabel id='products' color='teal'>Products</FormLabel>
                    <SearchBar />
                    <VStack overflowY={'auto'} h={'lg'}>
                        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                            {filteredProducts.map((product, index) => (
                                <GridItem 
                                    key={product.id} 
                                    onClick={() => handleGridItemClick(index)} 
                                    cursor="pointer"
                                >
                                    <Box bg={product.isSelected ? "teal.100" : "white"} p={3}>
                                        <ProductCard product={product} />
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>
                    </VStack>
                </VStack>
            </FormControl>
        </VStack>
    );
};

export default FormView;

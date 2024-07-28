// src/components/SummaryFormView.js

import React from 'react';
import { 
    Box, 
    Button,
    Input,
    Divider, 
    HStack, 
    Spacer, 
    VStack, 
    Text,
    Grid, 
    GridItem, 
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { setProductQuantity } from '../config/Slice';

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price);
};

const SummaryFormView = () => {
    const dispatch = useDispatch();
    const { date, customerName, salesPersonName, products, productQuantities, totalAmount } = useSelector((state) => state.invoice);

    const handleQuantityChange = (index, value) => {
        const maxQuantity = products[index].stock;
        const newQuantity = Math.min(Math.max(value, 1), maxQuantity);
        dispatch(setProductQuantity({ index, quantity: newQuantity }));
    };

    return (
        <Box
            w="md"
            h="38em"
            border="2px"
            borderColor="teal"
            borderRadius="10px"
        >
            <Box
                w="100%"
                backgroundColor="teal"
                textAlign="center"
                textColor="white"
                p={3}
                fontSize='lg'
            >
                Summary Invoice
            </Box>
            <VStack
                w="100%"
                spacing={4}
                align={'stretch'}
                py={3}
            >
                <HStack w="100%" px={5}>
                    <Text>Invoice Date</Text>
                    <Spacer />
                    <Text
                        color={'teal'} 
                        fontWeight={'bold'}>
                        {date}
                    </Text>
                </HStack>
                <HStack w="100%" px={5}>
                    <Text>Customer Name</Text>
                    <Spacer />
                    <Text
                        color={'teal'} 
                        fontWeight={'bold'}>
                        {customerName}
                    </Text>
                </HStack>
                <HStack w="100%" px={5}>
                    <Text>Sales Name</Text>
                    <Spacer />
                    <Text 
                        color={'teal'}
                        fontWeight={'bold'}>
                        {salesPersonName}
                    </Text>
                </HStack>
                <Grid px={5} templateColumns='repeat(15, 1fr)' gap={6}>
                    <GridItem w='100%' h='3' colSpan={6}>
                        <Text fontWeight={'bold'}>Products</Text> 
                    </GridItem>
                    <GridItem w='100%' h='3' colSpan={4}>
                        <Text fontWeight={'bold'}>Qty</Text> 
                    </GridItem>
                    <GridItem w='100%' h='3' colSpan={5}>
                        <Text fontWeight={'bold'}>Price</Text> 
                    </GridItem>
                </Grid>
                <VStack h='xs' overflowY='auto'>
                    <Grid px={5} templateColumns='repeat(15, 1fr)' gap={6}>
                        {products.filter(product => product.isSelected).map((product, index) => (
                            <React.Fragment key={product.id}>
                                <GridItem w='100%' colSpan={6}>
                                    <Text fontSize={'medium'} isTruncated>{product.name}</Text> 
                                </GridItem>
                                <GridItem w='100%' colSpan={4}>
                                    <Box display='flex' alignItems='center'>
                                        <Button onClick={() => handleQuantityChange(index, productQuantities[index] - 1)} disabled={productQuantities[index] <= 1}>-</Button>
                                        <Input value={productQuantities[index]} width='50px' textAlign='center' readOnly />
                                        <Button onClick={() => handleQuantityChange(index, productQuantities[index] + 1)} disabled={productQuantities[index] >= product.stock}>+</Button>
                                    </Box>
                                </GridItem>
                                <GridItem w='100%' colSpan={5}>
                                    <Text fontSize={'medium'} isTruncated>{formatPrice(product.price)}</Text> 
                                </GridItem>
                            </React.Fragment>
                        ))}
                    </Grid>
                </VStack>
               <HStack w="100%" px={5} align={'center'}>
                    <VStack align={'left'} spacing={0}>
                        <Text 
                            fontWeight={'bold'}>
                            Total
                        </Text>
                        <Text 
                            color={'teal'}
                            fontWeight={'bold'}>
                            {formatPrice(totalAmount || 0)}
                        </Text>
                    </VStack>
                    <Spacer />
                    <Button
                        bgColor={'teal'}
                        p={3}
                        color={'white'}
                        borderRadius={'10px'}>
                        Submit
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default SummaryFormView;

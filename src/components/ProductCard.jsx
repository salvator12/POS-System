// src/components/ProductCard.js

import React from 'react';
import {
  Box,
  Image,
} from '@chakra-ui/react';

const ProductCard = ({ product }) => {

  const formattedPrice = (price) => {
    return `IDR ${price.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <Box maxW='lg' borderWidth='4px' borderRadius='lg' borderColor='teal' overflow='hidden'>
      <Image src={product.imageURL} alt={product.name} w='lg'/>

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {product.name}
        </Box>

        <Box>
          <Box as='span' color='black'>
            {formattedPrice(product.price)}
          </Box>
          <Box as='span' color='gray.600' fontSize='sm'>
            / pcs
          </Box>
          <Box display='flex' mt='2' alignItems='center'>
            <Box as='span' color='black' fontSize='sm'>
              {product.stock} stocks
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;

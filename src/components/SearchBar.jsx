//src/components/SearchBar.js

import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../config/Slice';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <InputGroup size="sm" borderColor='teal'>
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon color='teal' />}
        alignItems="center"
        height="100%"
        pl='0.5rem'
      />
      <Input 
        type="text" 
        placeholder="Search..." 
        border="1px"
        borderColor='teal'
        borderRadius='5px'
        pl='2rem'
        onChange={handleSearchChange}
      />
    </InputGroup>
  );
};

export default SearchBar;
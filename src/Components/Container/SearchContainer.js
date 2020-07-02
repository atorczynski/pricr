import React, { useState } from 'react';
import {
  SearchContainerWrapper,
  SearchBar,
} from '../Container/SearchContainerComponents';

export default function SearchContainer() {
  const [placeholder, setPlaceholder] = useState('Please Enter Product Name');
  return (
    <SearchContainerWrapper>
      <SearchBar
        placeholder={placeholder}
        onFocus={() => {
          setPlaceholder('');
        }}
        onBlur={() => {
          setPlaceholder('Please Enter Product Name');
        }}
      />
    </SearchContainerWrapper>
  );
}

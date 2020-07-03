import React, { useState } from 'react';
import {
  SearchContainerWrapper,
  SearchBar,
  SearchBarWrapper,
  SearchBarTitle,
  FindButton,
} from '../Container/SearchContainerComponents';

export default function SearchContainer({ SBTitle }) {
  const [placeholder, setPlaceholder] = useState('Please enter the product name (e.g. Playstation 4)');
  return (
    <SearchContainerWrapper>
      <SearchBarWrapper>
        <SearchBarTitle>{SBTitle}</SearchBarTitle>
        <SearchBar
          placeholder={placeholder}
          onFocus={() => {
            setPlaceholder('');
          }}
          onBlur={() => {
            setPlaceholder('Please enter the product name (e.g. Playstation 4)');
          }}
        />
        <FindButton>search</FindButton>
      </SearchBarWrapper>
    </SearchContainerWrapper>
  );
}

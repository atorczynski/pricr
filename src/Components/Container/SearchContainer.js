import React, { useState } from 'react';
import {
  SearchContainerWrapper,
  SearchBar,
  SearchBarWrapper,
  SearchBarTitle,
  SearchButton,
  SearchBarButtonWrapper,
} from '../Container/SearchContainerComponents';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchContainer({ SBTitle }) {
  const [placeholder, setPlaceholder] = useState(
    'Please enter the product name (e.g. Playstation 4)'
  );
  return (
    <SearchContainerWrapper>
      <SearchBarWrapper>
        <SearchBarTitle>{SBTitle}</SearchBarTitle>
        <SearchBarButtonWrapper>
          <SearchBar
            placeholder={placeholder}
            onFocus={() => {
              setPlaceholder('');
            }}
            onBlur={() => {
              setPlaceholder(
                'Please enter the product name (e.g. Playstation 4)'
              );
            }}
          />
          <SearchButton
            style={{ borderRadius: 0 }}
            size={'medium'}
            variant='contained'
            color={'primary'}
          >
            <SearchIcon />
          </SearchButton>
        </SearchBarButtonWrapper>
      </SearchBarWrapper>
    </SearchContainerWrapper>
  );
}

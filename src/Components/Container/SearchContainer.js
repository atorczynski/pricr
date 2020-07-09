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

export default function SearchContainer({
  SBTitle,
  recievedData,
  onChange,
  onSubmit,
  onButtonClick,
  inputValue,
}) {
  const [placeholder, setPlaceholder] = useState(
    'Please enter the product name (e.g. Playstation 4)'
  );

  return (
    <SearchContainerWrapper inputValue={inputValue} recievedData={recievedData}>
      <SearchBarWrapper>
        <SearchBarTitle>{SBTitle}</SearchBarTitle>
        <SearchBarButtonWrapper onSubmit={onSubmit}>
          <SearchBar
            placeholder={placeholder}
            value={inputValue}
            autoFocus={true}
            onChange={onChange}
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
            onClick={onButtonClick}
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

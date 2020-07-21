import React from 'react';
import SpinLoader from './SpinLoaderComponents';

export const Loader = (props) => <SpinLoader {...props} />;

Loader.defaultProps = {
  background: '#DDD',
  color: '#ED462E',
  duration: 2,
  size: 11,
};

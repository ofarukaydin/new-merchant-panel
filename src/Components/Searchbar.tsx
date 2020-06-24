import React from 'react';
import { Input } from 'antd';
import { InterpolationWithTheme } from '@emotion/core';

type PropTypes = {
  onChange: (searchValue: string) => void;
  css?: InterpolationWithTheme<any>;
};

const Searchbar = (props: PropTypes) => {
  return (
    <Input.Search
      css={props.css}
      placeholder="Arama yapın..."
      onSearch={(value) => props.onChange(value)}
      enterButton
    />
  );
};

export default Searchbar;

import React from 'react';
import { Input } from 'antd';
import { InterpolationWithTheme } from '@emotion/core';

type PropTypes = {
  onChange: (searchValue: string) => void;
  css?: InterpolationWithTheme<any>;
};

export const Searchbar = (props: PropTypes): JSX.Element => {
  return (
    <Input.Search
      css={props.css}
      placeholder="Arama yapın..."
      onSearch={(value) => props.onChange(value)}
      enterButton
    />
  );
};

import React from 'react';
import { Input } from 'antd';

type PropTypes = {
  onChange: (searchValue: string) => void;
  className?: string;
};

const Searchbar = (props: PropTypes) => {
  return (
    <Input.Search
      className={props.className}
      placeholder="Arama yapın..."
      onSearch={(value) => props.onChange(value)}
      enterButton
    />
  );
};

export default Searchbar;

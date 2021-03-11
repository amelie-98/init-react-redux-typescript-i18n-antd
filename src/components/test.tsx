import React from 'react';
import Wrapper from './test.styled';

interface Iprops {
  text: String;
}

const Test: React.FC<Iprops> = (props: Iprops) => {
  const { text } = props;

  return <Wrapper>{text}</Wrapper>;
};

export default Test;

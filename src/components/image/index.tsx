import React from 'react';

interface Props {
  src: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  alt: string;
}
const Image = (props: Props) => {
  const { alt, borderRadius = 4, ...rest } = props;
  return <img {...rest} style={{ borderRadius }} alt={alt} />;
};

export default Image;

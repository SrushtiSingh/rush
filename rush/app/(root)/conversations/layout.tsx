import React, { Children } from 'react';

type Props = React.PropsWithChildren<{}>;

const Conversationslayout = ({ children }: Props) => {
  return 
    <div>{children}</div>;
  
};

export default Conversationslayout
import ItemList from '@/components/ui/shared/item-list/ItemList';
import React, { Children } from 'react';

type Props = React.PropsWithChildren<{}>;

const Conversationslayout = ({ children }: Props) => {
  return  (
  <>
  <ItemList
   title="Conversations">Converssations Page</ItemList>
   {children}
   </>
  );
  
};

export default Conversationslayout;
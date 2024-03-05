import { ShoppingBasket } from 'lucide-react';
import { MenuItem } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemCom = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer md:w-[30%]" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold flex justify-between">
        NGN{(menuItem.price / 100).toFixed(2)}
        <ShoppingBasket className="text-green-700" />
      </CardContent>
    </Card>
  );
};

export default MenuItemCom;

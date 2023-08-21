import React from 'react';
import FoodCart from '../../../components/FoodCart';

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {
        items.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
      }
    </div>
  );
};

export default OrderTab;
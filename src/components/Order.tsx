import React from 'react';
import { CardContent } from './ui/card';
import { Button } from './ui/button';
import OrderItem from './OrderItem';

// Correct interface for an order item
interface OrderItemType {
  title: string;
  quantity: number;
}

// Updated Order interface
interface Order {
  id: number;
  date: Date;
  status: string;
  order: OrderItemType[]; // Correct array of objects
  total: number;
}

const Order: React.FC<Order> = ({ id, date, status, order, total }) => {
  return (
    <CardContent>
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-semibold">Order #{id}</p>
          <p className="text-sm text-gray-500">Today, {date.toLocaleDateString()}</p>
        </div>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
          {status}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 mb-4">
        {order.map((item, index) => (
          <OrderItem key={index} title={item.title} quantity={item.quantity} />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">Total: ₹{total}</p>
        <Button variant="outline" className="border-orange-500 text-orange-500">
          Reorder
        </Button>
      </div>
    </CardContent>
  );
};

export default Order;

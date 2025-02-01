import React from 'react';
import { Calendar } from 'lucide-react';
import Order from '@/components/Order';
import { Card } from '@/components/ui/card';

interface OrderItemType {
    title: string;
    quantity: number;
  }

const OrderHistory = () => {

    const order: OrderItemType[] = [
        { title: 'Classic Burger', quantity: 2 },
        { title: 'French Fries', quantity: 1 },
        { title: 'Margherita Pizza', quantity: 3 },
        { title: 'Caesar Salad', quantity: 1 },
        { title: 'Chocolate Milkshake', quantity: 2 }
      ];
      
      
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <select className="border rounded-md p-2">
          <option>All Orders</option>
          <option>Delivered</option>
          <option>Pending</option>
        </select>
        <div className="flex items-center border rounded-md p-2">
          <Calendar className="h-4 w-4 mr-2" />
          <input type="text" placeholder="dd-mm-yyyy" className="outline-none" />
        </div>
      </div>

      <Card className="bg-white shadow rounded-2xl p-4">
        <Order id={1234} date={new Date()} status='delivered' order={order} total={200}/>
      </Card>
    </div>
  );
};

export default OrderHistory;

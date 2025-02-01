import React from 'react'

interface OrderItemProps {
    title: string;
    quantity: number;
  }

const OrderItem: React.FC<OrderItemProps> = ({ title, quantity }) => {
  return (
    <div className="flex items-center space-x-2">
    <div className="w-12 h-12 bg-orange-100 rounded" />
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">Quantity: {quantity}</p>
    </div>
  </div>
  )
}

export default OrderItem
// components/OrderList.tsx

import React from "react";

interface Order {
  id: string;
  farmerName: string;
  landSize: number;
  fertilizerQuantity: number;
  seedQuantity: number;
  status: string;
}

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Order Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-lg font-semibold">{order.farmerName}</h2>
            <p>Land Size: {order.landSize} acres</p>
            <p>Fertilizer Quantity: {order.fertilizerQuantity} kgs</p>
            <p>Seed Quantity: {order.seedQuantity} kgs</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;

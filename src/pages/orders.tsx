// pages/orders.tsx

import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import OrderList from "@/components/OrderListing/OrderListing";

const OrdersPage: React.FC = () => {
  // Dummy data for demonstration
  const orders = [
    {
      id: "1",
      farmerName: "John Doe",
      landSize: 2,
      fertilizerQuantity: 4,
      seedQuantity: 1,
      status: "Pending",
    },
    {
      id: "2",
      farmerName: "Jane Smith",
      landSize: 1.5,
      fertilizerQuantity: 3,
      seedQuantity: 0.5,
      status: "Approved",
    },
    // Add more orders as needed
  ];

  return (
    <div>
      <Navigation />
      <OrderList orders={orders} />
    </div>
  );
};

export default OrdersPage;

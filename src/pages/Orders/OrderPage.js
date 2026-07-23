import React, { useEffect, useState } from "react";
import { OrderSuccess } from "./orderSuccess";
import UseTitle from "../../hooks/UseTitle";
import { toast } from "react-toastify";

const OrderPage = () => {
  UseTitle("Orders");

  const token = sessionStorage.getItem("token");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_HOST}660/orders`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const d = await response.json();
        console.log(d);
        setData(d[d.length - 1]);
      } catch (error) {
        toast.error(error.message);
      }
    }

    fetchOrders();
  }, [token]);

  return (
    <div>
      <OrderSuccess data={data} />
    </div>
  );
};

export default OrderPage;
import React, { useEffect, useState } from "react";
import Dashcard from "./Dashcard";
import Dashempty from "./Dashempty";
import UseTitle from "../../hooks/UseTitle";
import { toast } from "react-toastify";

const Dash = () => {
  UseTitle("DashBoard")
  const [data, setData] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    async function fetchOrders() {
      try{
      const response = await fetch(`${process.env.REACT_APP_HOST}660/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok){
        throw {message:response.status,status:response.statusText}
      }

      const d = await response.json();
      console.log(d);
      setData(d);
    }
    catch(error){
      toast.error(error.status)
    }
  }

    fetchOrders();
  }, [token]);

  return (
    <div>
      {data.length > 0 ? (
        data.map((order) => (
          <Dashcard key={order.id} order={order} />
        ))
      ) : (
        <Dashempty />
      )}
    </div>
  );
};

export default Dash;
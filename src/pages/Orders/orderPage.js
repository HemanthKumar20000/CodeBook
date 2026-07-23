import React, { useEffect, useState } from "react";
import { OrderSuccess } from "./orderSuccess";
import UseTitle from "../../hooks/UseTitle";
import { toast } from "react-toastify";

const orderPage = () => {
  UseTitle("Orders")
  const token = sessionStorage.getItem("token");
  const [data, setData] = useState([]);

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
      setData(d[d.length - 1]);
      console.log(data)
    }
  catch(error){
    toast.error(error.status)
  }}
    

    fetchOrders();
  }, [token]);

  return (
    <div>
     <OrderSuccess data={data} />
    </div>
  );
};

export default orderPage;
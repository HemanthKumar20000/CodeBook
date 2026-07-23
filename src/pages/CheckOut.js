import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import UseTitle from "../hooks/UseTitle";
import { toast } from "react-toastify";

const CheckOut = () => {
  UseTitle("Checkout")
    const navigate=useNavigate();
    const {CartList}=useCartContext();
    const [data,setData]=useState({});
    const {total}=useCartContext();
    const id=sessionStorage.getItem("cbid");
    const token=sessionStorage.getItem("token")
    useEffect(()=>{
        try{
        async function handlerequest(){
            const response=await fetch(`${process.env.REACT_APP_HOST}users/${id}`,{
                method:"GET",
                headers: {
                            "Content-Type": "application/json",
                            Authorization:`Bearer ${token}`
                        }
                
            })
            if(!response.ok){
               throw {message:response.status,status:response.statusText}
            }
            const d=await response.json();
            console.log(d)
            setData(d)

        }handlerequest();
    }catch(error){
      toast.error(error.status)
    }},[])
async function handleOrderRequest(event){
  try{
      event.preventDefault();

    const orders={
        Cartlist:CartList,
        email:data.email,
        tot:total,
        userid:id

    }
    const response=await fetch(`${process.env.REACT_APP_HOST}660/orders`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(orders)
    })
    if(!response.ok){
       throw {message:response.status,status:response.statusText}
    }
    navigate("/ordersummary");
}catch(error){
  toast.error(error.status)
}}

  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div
        id="authentication-modal"
        tabIndex="-1"
        className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                <i className="bi bi-credit-card mr-2"></i>
                CARD PAYMENT
              </h3>

              <form className="space-y-6" onSubmit={handleOrderRequest}>
                

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={data?.email}
                    disabled
                    readOnly
                  />
                </div>

                <div>
                  <label
                    htmlFor="card"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value="4215 6254 6259 7845"
                    disabled
                    readOnly
                  />
                </div>

                <div className="flex gap-3">
                  <div>
                    <label
                      htmlFor="month"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Expiry Month
                    </label>
                    <input
                      type="text"
                      id="month"
                      className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                      value="03"
                      disabled
                      readOnly
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="year"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Expiry Year
                    </label>
                    <input
                      type="text"
                      id="year"
                      className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                      value="27"
                      disabled
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Security Code:
                  </label>
                  <input
                    type="text"
                    id="code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value="523"
                    disabled
                    readOnly
                  />
                </div>

                <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                  ${total}
                </p>
                
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  <i className="mr-2 bi bi-lock-fill"></i>
                  PAY NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
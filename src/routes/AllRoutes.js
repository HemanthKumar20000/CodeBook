import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  ProductList,
  Cart,
  Productdetails,
  Registration,
  Login,
} from "../pages/index";
import OrderPage from "../pages/Orders/OrderPage";
import ProtectedRoutes from "./ProtectedRoutes";
import Dash from "../pages/Dashboard/dash"
import PageNotFound from "../pages/PageNotFound";
const AllRoutes = () => {
  
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
        <Route path="/cart" element={<ProtectedRoutes><Cart /></ProtectedRoutes>}></Route>
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ordersummary" element= {<ProtectedRoutes><OrderPage/></ProtectedRoutes>}/>
        <Route path="/dashboard" element={<Dash/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;

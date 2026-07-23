import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import UseTitle from '../hooks/UseTitle';
const Registration = () => {
    UseTitle("Registration")
    const navigate=useNavigate();
    async function HandleRequest(event){
        try{
        event.preventDefault();
        const details={
            email:event.target.email.value ,
            password:event.target.password.value
        }
        const response= await fetch(`${process.env.REACT_APP_HOST}register`,{
            method:"POST",
            headers: {
                        "Content-Type": "application/json",
                    },
            body:JSON.stringify(details)
        })
        if (!response.ok){
             throw new Error("Login failed");
        }
        const data=await response.json();
        console.log(data)
        if (data.accessToken) {
    sessionStorage.setItem("token", data.accessToken);
    sessionStorage.setItem("email", data.user.email);
    sessionStorage.setItem("cbid",data.user.id);
    navigate("/productlist");

} else {
    toast.error(data.error || "Registration failed");
} }catch(error){
    toast.error(error.status)
} }
  return (
        <form className="max-w-sm mx-auto" onSubmit={HandleRequest}>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
            <input type="email" id="email"  name="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
            <input type="password" id="password"name="password"  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
        </div>
        <label htmlFor="remember" className="flex items-center mb-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
            <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <Link to="#" className="text-fg-brand hover:underline">terms and conditions</Link>.</p>
        </label>
        <button type="submit" className=" bg-blue-500 hover:bg-blue-600 rounded text-white box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
        </form>
  )
}

export default Registration

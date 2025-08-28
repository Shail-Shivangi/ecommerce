//context api for token store

import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useReducer } from "react";
import reducer from "../Reducer/productReducer.js";
export const AuthContext=createContext();
const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureproducts:[],
    SingleProduct:{}
}

export const Authprovider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const [token, setToken]=useState(localStorage.getItem("token"));
    const [currData,setCurrData]=useState("")
    const localStoreToken=(serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token",serverToken)
    }
    // Authentication for getting user data
  const userAuthentication=async(req,res)=>{
    try {
        const response=await fetch(`http://localhost:8000/user/data`,{
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        if(response.ok){
            const res_data=await response.json();
            setCurrData(res_data.data[0])
        }
        
    } catch (err) {
        return res.status(400).json({message:"fetching error"})
    }
  }
  const getProducts=async()=>{
    dispatch({type:"set_loading"})
   
    try {
        const response=await fetch('http://localhost:8000/api/products');
    const product=await response.json();
    // console.log("context",product.result);
    dispatch({type:"set_product",payload:product.result})
        
    } catch (error) {
        dispatch({type:"db_error"})
    }
    
  }
  const detailedProduct=async(url)=>{
    dispatch({type:"set_loading"});
    try {
      const response=await fetch(`${url}`);
      const product=await response.json();
      console.log("url",product) 
      dispatch({type:"set_Single_product",payload:product.result[0]})
    } catch (error) {
        dispatch({type:"db_error"}) 
    }
  }
  useEffect(()=>{
     userAuthentication(),
     getProducts()
    //  detailedProduct()
  },[token]);
return <AuthContext.Provider value={{localStoreToken,...state,currData,detailedProduct}}>{children}</AuthContext.Provider>
}
export const useAuth=()=>{
 const authContextValue=useContext(AuthContext);
 if(!authContextValue){
    throw new Error("useAuth used")
 }

 return authContextValue;
}

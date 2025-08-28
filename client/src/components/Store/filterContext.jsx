// import

import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./Auth";
import reducer from "../Reducer/filterreducer.js"

export const FilterContext=createContext();
export const FilterContextProvider=({children})=>{
    const initialState={
        filter_Products:[],
        all_products:[],
        sorting_value:"incr",
        filters:{
            text:"",
            category:"",
            brand:""
        }
    }
    const {products}=useAuth();
    const [state,dispatch]=useReducer(reducer,initialState)
    // console.log("from",products);
    const sorting=(event)=>{
        let userChoice=event.target.value;
        
        dispatch({type:"filter_choice",payload:userChoice})
    }
    const updateFilterValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        console.log("ficon",name)
        // let checked=event.target.checked;
        // if(name=="text"){
        //     return dispatch({type:"update_filter_value",payload:{name,value,checked:"true"}})
        // }
        // console.log(name,value)
        // if(name=="category"){
        //     return dispatch({type:"update_filter_value",payload:{name,value}})
        // }
        return dispatch({type:"update_filter_value",payload:{name,value}})
    }
   
      
    useEffect(()=>{
        dispatch({type:"search_products"})
        dispatch({type:"sorting_type"});
        // console.log("useeffect");
    },[ state.sorting_value])

    useEffect(() => {
        console.log("useeffect",products)
        if (products ) {
            dispatch({ type: "get_filter_product", payload: products });
        }
        console.log("after",products)
    }, [products]);

    return (<FilterContext.Provider value={{state,sorting,updateFilterValue}}>
        {children}
    </FilterContext.Provider>
    )
}
export const useFilterContext=()=>{
            
    return useContext(FilterContext)
}
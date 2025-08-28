const filterReducer=(state,action)=>{
    switch (action.type) {
        case "get_filter_product":
            console.log("hi",state.filter_Products)
            return{  
                ...state,
                filter_Products:action.payload,
                all_products:action.payload,
               
            }
        case "filter_choice": 
        // console.log("choice",action.payload) 
        return{
            ...state,
            sorting_value:action.payload
        }
    case "sorting_type":
    let newSortData;
    const { filter_Products, sorting_value } = state;
    let tempSortproduct = [...filter_Products]; // Spread to create a shallow copy
    console.log("ch",sorting_value)
    const sortingProducts = (a, b) => {
        if (sorting_value === "incr")
            return Number( a.price.replace("$","")) - Number( b.price.replace("$",""))
        if (sorting_value === "decr") 
            return Number( b.price.replace("$","")) - Number( a.price.replace("$",""))
    }
    
    newSortData = tempSortproduct.sort(sortingProducts);

    return {
        ...state,
        filter_Products: newSortData
    };
    case "update_filter_value":
        const {name,value}=action.payload;
        return {
            ...state,
            filters: {
                ...state.filters,
                [name] : value,
            },
        };
        case "search_products":
            let{all_products}=state;
            let tempFilterProduct=[...all_products];
            const {text,category}=state.filters;
            if(text){
                tempFilterProduct=tempFilterProduct.filter((curr)=>{
                  return  curr.brand_name.toLowerCase().includes(text.toLowerCase()) || curr.category_name.toLowerCase().includes(text.toLowerCase());
                })
            }
            if (category ) {
                if(category=="Electronics Devices")
                    tempFilterProduct=all_products;

                // const currentCategories = Array.isArray(state.filters.category) ? state.filters.category : [];
                // newCategories = currentCategories.includes(value)
                //     ? currentCategories.filter((cat) => cat !== value)
                //     : [...currentCategories, value];
                else{
                   
                        tempFilterProduct = tempFilterProduct.filter((product) =>
                            product.category_name.toLowerCase().includes(category.toLowerCase())
                        );
                      }
            }
                // console.log("Updated Categories:", newCategories);  // Debugging: log updated categories
               
            
        
            // if (name === "brand") {
            //     const currentBrands = Array.isArray(state.filters.brand) ? state.filters.brand : [];
            //     newBrands = currentBrands.includes(value)
            //         ? currentBrands.filter((br) => br !== value)
            //         : [...currentBrands, value];
            console.log("red",tempFilterProduct)
            return{
                ...state,
                filter_Products: tempFilterProduct
            };
        
        default:
            return {...state}
            
    }

}
export default filterReducer;
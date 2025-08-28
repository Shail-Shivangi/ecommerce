const productReducer=(state, action)=>{
 switch (action.type) {
    case "set_loading":
        return{...state,isLoading:true }       
    case "db_error": 
    return{...state,isLoading:false,isError:true} 
    case "set_product":
        
        const featureProducts=action.payload.filter((prod)=>{
            return prod.presence=="FeaturedProducts";
        })
        // console.log(state.products);
        return{
        ...state,
        isLoading:false,
        products:action.payload,
        featureproducts:featureProducts,
        } 
        case "set_Single_product": 
        return{
            ...state,
            isLoading:false,
            SingleProduct:action.payload
        }  
    default:
        return{...state};
        
 }
}
export default productReducer;
import db from "../config/db.js"

const qry=`select inter.product_id,inter.image_url,inter.presence,inter.title, inter.category_id, inter.price, inter.category_name , b.name as brand_name, b.brand_id 
from(select product_id, title, price,p.image_url,p.presence, p.category_id,p.brand_id, c.name as category_name 
 from products as p 
 inner join categories as c 
 on p.category_id=c.category_id) as inter
 inner join brands as b on inter.brand_id=b.brand_id`
 let allProduct=[];
const getAllProduct=(req,res)=>{
    
   db.query(qry,(err,result)=>{
      allProduct=result;
      res.status(200).json({
         result
      });
   })
 
}
const getProductTesting=(req,res1)=>{
   
   const {brand_name,category_name,product_id}=req.query;
   
   let sqlquery=`select * from (${qry}) as i where 1=1`;
   let queryParams=[];
   
   if(brand_name){
      sqlquery+=` and i.brand_name like (?)`;
      queryParams.push(brand_name+"%");
   }
   if(category_name && brand_name){
      sqlquery+=` or i.category_name=(?)`;
      queryParams.push(category_name);
   }
   if(category_name){
      sqlquery+=` and i.category_name=(?)`;
      queryParams.push(category_name)
   }
   if(product_id){
    sqlquery+=` and i.product_id=(?)`;
    queryParams.push(product_id)
   }
   db.query(sqlquery,queryParams,(err,result)=>{
      if(err) throw err;
      res1.status(200).json({
         result
      });
   })

}
export{getAllProduct,getProductTesting};
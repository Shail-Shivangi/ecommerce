import db from "../config/db.js";
import jwt from 'jsonwebtoken';
 const userDataFetchingMiddleWare=async(req,res,next)=>{
    const token=req.header("Authorization");
    if(!token){
        return res.status(400).json({message:"Unauthorized user token "})

    }
    const jwtToken=token.replace("Bearer","").trim();
    try {
        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        const qry=`select user_id,username,email from login_data where email=(?)`;
        db.query(qry,[isVerified.email],(err,result)=>{
            if(err) throw err;
            req.user=result;
            req.token=token;
            req.user_id=result[0].user_id;
            next();
        })
    } catch (err) {
        return res.status(400).json({message:"unauthorized user"});
    }
 }
 export {userDataFetchingMiddleWare};
import db from "../config/db.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

function generateToken(user_id,email){
    try { return jwt.sign(
        {
        user_id:user_id.toString(),
        email:email,
        }, process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }

)
        
    } catch (err) {
        console.log(err)
    }
}

const RegisterUser=(req,res)=>{
    const {name,email,password,cfmPassword}=req.body;
    const qry=`select email from login_data where email=(?)`;

    db.query(qry,[email],(err,result)=>{
        if(err) throw err;
        if(result.length!=0){
            // console.log("email")
        return res.status(400).json({message:"Email is already registered"});
        }
    });
    // if(password!=cfmPassword){
    //     return res.status(200).json({message:"Password and confirm password are not matched"})
    // }
    const saltRound=10;
    bcrypt.hash(password,saltRound,(err,hash)=>{
        if(err) throw err;

        const qry1=`insert into login_data(username,email,password) values (?,?,?) `;
        db.query(qry1,[name,email,hash],(err1,result1)=>{
            if(err1) throw err1;
            const qry2 = `SELECT user_id FROM login_data WHERE email = ?`;
            db.query(qry2,[email],(err2,result2)=>{
                if(err2) throw err2;
                return res.status(200).json({
                    message:
                    `Successfully Registered 
                    Thank You for Registration`,
                    token:generateToken(result2[0].user_id,email),
                    user_id:result2[0].user_id
                })
            })
            
        })
    })
    
};

const loginAuthentication=async(req,res,next)=>{
    const {email ,password}=req.body;
    try {
        const qry=`select * from login_data where email=(?)`;
        db.query(qry,[email],(err,result)=>{
            if(err) throw err;
            if(result.length==0){
                res.status(400).json({
                    message:"Invalid Credentials"
                })
            }
            //decode
            bcrypt.compare(password,result[0].password,function(err2,pass){
                if(pass){
                    res.status(200).json({
                        message:"Login Successfully",
                        token:generateToken(result[0].user_id,email)
                    })
                } 
                else{
                    res.status(400).json({ message:"Invalid email or password"});
                }    
            });
            
        })
        
    } catch (err) {
        const status=401;
        const message="Fill the details properly";
        const errorType="internal server error";
        const error={status,message,errorType}
        next(error);
    }
}
const fetchingUserData=async(req,res)=>{
    try {
       const userData =req.user;
       return res.status(200).json({data:userData})
    } catch (err) {
        return res.status(400).json({message:"Fetching error"})
    }
}

export {RegisterUser,loginAuthentication,fetchingUserData}
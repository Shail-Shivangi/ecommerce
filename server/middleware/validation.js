const validation=(schema)=>async(req,res,next)=>{
  try {
    const parseData=await schema.parseAsync(req.body)
    req.body=parseData;
    next();
    
  } catch (err) {
    const status=200;
    const message="Fill the details properly";
    const errorType=err.errors[0].message;
    const error={
        status,message,errorType
    }
    next(error);
  }
};
export {validation};
const errorMiddleware=(err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || "Backened Error";
    const errorType=err.errorType || "Error from Backened"
    return res.status(400).json({message,errorType})
}
export default errorMiddleware;
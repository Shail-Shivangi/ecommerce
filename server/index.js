import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/user.js"
import productRoutes from "./routes/productRoutes.js";
import errorMiddleware from './middleware/error.js';
const port = process.env.PORT || 8000;

const app = express();
// middleware
const corsOption={
  origin:"http://localhost:5173",
  method:"GET, POST, PATCH, PUT, DELETE",
  credentials:true
}
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors(corsOption));

//Routes
app.use('/api',productRoutes);
app.use('/user',userRoutes);

// app.get("/", (req, res) => {
//   res.json({
//     msg: "Success",
//   });
// });

app.use(errorMiddleware)
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

import { Router } from "express";
const router = Router();
import {RegisterUser,loginAuthentication,fetchingUserData} from "../controllers/user.js"
import { loginSchema, signupSchema } from "../validator/validate.js";
import {validation} from "../middleware/validation.js"
import { userDataFetchingMiddleWare } from "../middleware/userData.js";

router.post("/register",validation(signupSchema),RegisterUser)
router.post("/login",validation(loginSchema),loginAuthentication)
router.get("/data",userDataFetchingMiddleWare,fetchingUserData);
export default router;
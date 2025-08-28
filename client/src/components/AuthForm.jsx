import { useEffect, useState } from 'react';
import apple from '/src/assets/icons8-apple-logo.svg';
import google from '/src/assets/icons8-google.svg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Store/Auth';



const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between SignIn and SignUp forms
  const [isForgetPassword, setIsForgetPassword] = useState(false); // State to toggle Forget Password form
  const [showPassword, setShowPassword] = useState(false);

  const [user,setUser]=useState({
     name:"",
     email:"",
     password:"",
     cfmPassword:""
  })
  const [loginData,setLoginData]=useState({
    email:"",
    password:""
  });
  const navigate=useNavigate();
  const {localStoreToken}=useAuth()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    setIsForgetPassword(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsForgetPassword(false);
  };

  const handleForgetPasswordClick = () => {
    setIsForgetPassword(true);
  };

const handleInputChange=(e)=>{
   const {name,value}=e.target;
   setUser({...user,[name]:value})
};
const handleLoginInputChange=(e)=>{
  const {name,value}=e.target;
  setLoginData({...loginData,[name]:value})
};
const handleSignUpSubmit=async(event)=>{
  event.preventDefault()
  try {
    const response=await fetch(`http://localhost:8000/user/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
    const data=await response.json();
    // console.log(response)
    // console.log(data)
    if(response.ok){
      localStoreToken(data.token);
      setUser({
        name:"",
     email:"",
     password:"",
     cfmPassword:""
      });
      // if(!data.message ||!data.errorType)
      toast.success("Registration Successfully");
      navigate("/dashboard");
    }
    else{
      console.log(data.errorType);
      console.log(data.message);
      toast.error(data.message?data.message:data.errorType);
      // setTimeout(()=>{
      //   window.location.reload();
      // },1000);
    }
   
  
  } catch (err) {
    console.log("Registeration error",err);
  }
};
const handleLoginSubmit=async(event)=>{
  event.preventDefault();
  try {
    const response=await fetch('http://localhost:8000/user/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(loginData)
    })
    const res_data=await response.json();
    if(response.ok){
      localStoreToken(res_data.token)
      setLoginData({
        email:"",
        password:""
      })
      toast.success("Login Successfully");
      navigate("/dashboard")
    }
    else{
      toast.error(res_data.errorType?res_data.errorType:res_data.message)
    }
  } catch (err) {
    console.log("login error",err)
  }
}
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        {!isForgetPassword && (
          <div className="flex justify-center mb-4">
            {/* Sign In / Sign Up Toggle */}
            <button
              className={`px-4 py-2 font-semibold ${!isSignUp ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
              onClick={handleSignInClick}
            >
              Sign In
            </button>
            <button
              className={`px-4 py-2 font-semibold ${isSignUp ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        )}

        {isForgetPassword ? (
          /* Forget Password Form */
          <form>
            <h2 className="text-center text-2xl font-semibold mb-4">Forget Password</h2>
            <p className="text-center text-gray-600 mb-4">
              Enter the email address or mobile phone number associated with your Clicon account.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              SEND CODE &rarr;
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  className="text-blue-500 underline"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </p>
              <p className="text-sm">
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  className="text-blue-500 underline"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm">
                You may contact{' '}
                <a href="#" className="text-orange-500 underline">
                  Customer Service
                </a>{' '}
                for help restoring access to your account.
              </p>
            </div>
          </form>
        ) : isSignUp ? (
          /* Sign Up Form */
          <form onSubmit={handleSignUpSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name='name'
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInputChange}
                placeholder="Name"
                value={user.name}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name='email'
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
                onChange={handleInputChange}
                value={user.email}
                required
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                onChange={handleInputChange}
                name='password'
                value={user.password}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-gray-600"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
                name='cfmPassword'
                onChange={handleInputChange}
                value={user.cfmPassword}
                required
              />
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required/>
                <span className="text-sm">Agree to <a href="#" className="text-blue-500">Terms of Condition</a> and <a href="#" className="text-blue-500">Privacy Policy</a>?</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              SIGN UP &rarr;
            </button>
          </form>
        ) : (
          /* Sign In Form */
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                 name='email'
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
                onChange={handleLoginInputChange}
                value={loginData.email}
                required
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                name='password'
                onChange={handleLoginInputChange}
                value={loginData.password}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-gray-600"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div className="flex justify-end mb-6">
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline"
                onClick={handleForgetPasswordClick}
              >
                Forget Password
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              LOGIN &rarr;
            </button>
          </form>
        )}

        {/* Social Login Options */}
        {!isForgetPassword && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">or</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="flex items-center border px-4 py-2 rounded-md hover:bg-gray-100">
                <img src={google} alt="Google" className="h-6 w-6 mr-2" />
                Sign up with Google
              </button>
              <button className="flex items-center border px-4 py-2 rounded-md hover:bg-gray-100">
                <img src={apple} alt="Apple" className="h-6 w-6 mr-2" />
                Sign up with Apple
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;

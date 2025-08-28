import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { useAuth } from './Store/Auth';

export default function FAQ() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [text, settext] = useState("");
  const [ans, setAns] = useState("");
  const {currData}=useAuth()
  const[data,setData]=useState(true);

  if(data && currData){
    console.log(currData)
    setemail(currData.email);
    setuser(currData.username)
    settext("");
    setData(false);
  }
  let q1, q2, q3, q4, q5;
  const sol = {
    q1: "To create an account, click on the Sign Up button at the top of the homepage. Fill in your details and submit the form. Once registered, you can easily track orders and manage your personal information.",
    q2: "Once your order is shipped, you’ll receive an email with a tracking number and a link to track the shipment. You can also track your order from your account under Order History.",
    q3: "Yes, we offer digital gift cards in various denominations. Gift cards can be redeemed online at checkout.",
    q4: "Yes, we use industry-standard security protocols (SSL encryption) to ensure your personal and payment information is safe.",
    q5: "We offer a 30-day return policy for most items. Products must be returned in their original condition, with all packaging and accessories. Visit our Returns & Exchanges page for more information."
  };

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setuser("");
    setemail("");
    settext("");
  };

  return (
    <div className='faq flex flex-col md:flex-row justify-around relative rounded-md p-5'>
      <div className='contain h-[65vh] w-full md:w-[70vh] mt-10 relative'>
        <div>
          <h1 className='pl-4 md:pl-[3.8rem] pt-0 font-bold text-xl md:text-4xl'>Frequently Asked Questions</h1>
        </div>

        <div className='q1 flex items-center border border-solid rounded-lg h-[2.5rem] w-full md:w-[28rem] text-base md:text-lg ml-4 md:ml-8 mt-4 md:mt-10 shadow-md'>
          <div className='pl-4 md:pl-8'>How do I create an account?</div>
          <GoPlus className='ml-auto mr-4 md:ml-[5.7rem] mt-[0.4rem]' onClick={() => toggleBox(setAns(sol.q1))} />
        </div>

        <div className='q2 flex items-center border border-solid rounded-lg h-[2.3rem] w-full md:w-[28rem] text-base md:text-lg ml-4 md:ml-8 mt-4 md:mt-10 shadow-md'>
          <div className='pl-4 md:pl-8'>How can I track my order?</div>
          <GoPlus className='ml-auto mr-4 md:ml-[7rem] mt-[0.4rem]' onClick={() => toggleBox(setAns(sol.q2))} />
        </div>

        <div className='q3 flex items-center border border-solid rounded-lg h-[2.3rem] w-full md:w-[28rem] text-base md:text-lg ml-4 md:ml-8 mt-4 md:mt-10 shadow-md'>
          <div className='pl-4 md:pl-8'>Do you offer gift cards?</div>
          <GoPlus className='ml-auto mr-4 md:ml-[9rem] mt-[0.4rem]' onClick={() => toggleBox(setAns(sol.q3))} />
        </div>

        <div className='q4 flex items-center border border-solid rounded-lg h-[2.3rem] w-full md:w-[28rem] text-base md:text-lg ml-4 md:ml-8 mt-4 md:mt-10 shadow-md'>
          <div className='pl-4 md:pl-8'>Is my personal data secure?</div>
          <GoPlus className='ml-auto mr-4 md:ml-[6.8rem] mt-[0.4rem]' onClick={() => toggleBox(setAns(sol.q4))} />
        </div>

        <div className='q5 flex items-center border border-solid rounded-lg h-[2.3rem] w-full md:w-[28rem] text-base md:text-lg ml-4 md:ml-8 mt-4 md:mt-10 shadow-md'>
          <div className='pl-4 md:pl-8'>What is your return policy?</div>
          <GoPlus className='ml-auto mr-4 md:ml-[7.2rem] mt-[0.4rem]' onClick={() => toggleBox(setAns(sol.q5))} />
        </div>

        {isBoxVisible && (
          <div className='absolute top-[70px] right-[20px] w-[40rem] h-[15rem] bg-white border border-black p-5 z-50 rounded-md'>
            <div className='follow text-center bg-orange-400'>
              <h5 className="font-semibold pt-3 pb-3 text-xl mb-5">Follow The Process</h5>
            </div>
            <div>{ans}</div>
            <button className=' w-[5rem] mt-3 p-2 rounded-md bg-orange-400 font-semibold' onClick={() => toggleBox(q1)}>Close</button>
          </div>
        )}

        {isBoxVisible && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40'
            onClick={() => toggleBox(q1)} 
          />
        )}
      </div>

      <aside className='mt-12 mr-0 md:mr-[11rem] w-full md:w-auto'>
        <div className='other flex flex-col h-auto md:h-[55vh] w-full md:w-[50vh] bg-yellow-100 rounded-md p-5'>
          <h2 className='text-center font-bold text-xl'>Don't find your answer? Ask for Support</h2>
          <p className='text-center text-lg mb-8 font-semibold'>If you want to ask any other query regarding the website, send an email and find your answer.</p>
          <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <input type="text" className='h-[2rem] w-[90%] md:w-[20rem] mb-3 border p-2' onChange={(e)=> setuser(e.target.value)} name="UserName" placeholder="Enter UserName" required value={user}/>

            <input type="text" className='h-[2rem] w-[90%] md:w-[20rem] mb-3 border p-2' onChange={(e)=> setemail(e.target.value)} name="email" placeholder="Enter Email" required value={email}/>

            <textarea className='h-[5rem] w-[90%] md:w-[20rem] border p-2 mb-3' onChange={(e)=> settext(e.target.value)} name="text" placeholder="Ask Any Question" required value={text}/>

            <button className='h-[2rem] w-[10rem] bg-orange-400 rounded-md'>Send Message</button>
          </form>
        </div>
      </aside>
    </div>
  )
}

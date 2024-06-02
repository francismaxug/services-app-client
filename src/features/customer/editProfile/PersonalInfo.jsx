import React, { useEffect, useState } from "react";
import { sanitizePhone } from "../../../utils/helpers";
import axios from "axios";
import {toast} from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";
import { getApiUrl } from "../../../services/apiAuth";
import FullPageLoader from "../../../components/common/FullPageLoader";
import { useRoute } from "../../../hooks/auth/useRoute";
import { useUserDetails } from "../../../context/UserDetailContext";

const PersonalInfo = ({img}) => {
  
  const [isLoading,setLoading] = useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [password,setPassword] = useState("")
  const [resetPassword,setResetPassword] = useState("")



  // const number = sanitizePhone(phoneNumber)
  // console.log(number)
  const route = useRoute();
  const { info } = useUserDetails();
  const {name:loadName, email:loadEmail, phoneNumber: loadPhoneNumber} = info
  const { dispatch} = useAuth();
 const phone = loadPhoneNumber.slice(3)
  const number = phoneNumber&& sanitizePhone(phoneNumber)
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", number);
    formData.append("imageOfUser", img);
  
  useEffect(() => {
    setName(loadName);
    setEmail(loadEmail);
    setPhoneNumber(phone?.padStart(10,"0"+phone));
      },[loadEmail,loadPhoneNumber,loadName, phone])
  const handleSave = async(e) => {
    e.preventDefault()
    if(resetPassword !==password){
      toast.error("passwords do not match")
      return
    }
  setLoading(true)
    // You can send the formData to your backend or perform any other action here
    console.log({
      name,
      email,
      password,
      phoneNumber: sanitizePhone(phoneNumber),
      img
    })
    const token = localStorage.getItem("verifytoken");
    const url = getApiUrl("updateDetails");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': "*",
      }
    }
    try {
      const { data } = await axios.patch(url, formData, config)
      dispatch({ type: "auth/login", payload: data });
      setLoading(false)
      toast.success("personal details updated ")
      route(data.role)
    } catch (error) {
      setLoading(false)
      toast.error(error.response?.data?.message)
    }
  };
 
  if(isLoading){
    return <FullPageLoader/>
  }
  return (
    

    <div className="mt-6">
      <h1 className="font-bold text-2xl md:text-3xl mt-10 mb-4">
        Personal Information
      </h1>
      <form onSubmit={handleSave} className="flex flex-col px-4 md:px-0">
       

        <div className="flex flex-col mb-3">
          <label htmlFor="" className="flex text-start">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className=" w-[340px] md:w-[600px] h-[43px] rounded-sm focus:outline-none outline-none"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 mb-2">
          <div className="flex flex-col">
            <label htmlFor="" className="flex text-start">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-[340px] md:w-[290px] h-[43px] rounded-sm focus:outline-none outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="flex text-start">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e)=>setPhoneNumber(e.target.value)}
              className="w-[340px] md:w-[290px] h-[43px] rounded-sm focus:outline-none outline-none"
            />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-base md:text-3xl mt-10 mb-4 text-start">
            Password
          </h2>
          <div className="flex flex-col mb-2">
            <div className="flex flex-col">
              <label htmlFor="" className="flex text-start">
                New password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-[340px] md:w-[290px] h-[43px] rounded-sm focus:outline-none outline-none mb-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="flex text-start">
                Re-enter password
              </label>
              <input
                type="password"
                value={resetPassword}
                onChange={(e)=>setResetPassword(e.target.value)}
                className="w-[340px] md:w-[290px] h-[43px] rounded-sm focus:outline-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 mb-3">
          <button
            type="submit"
            className="border border-[#1F2937] px-5 py-2 rounded-md hover:text-white duration-75 translate-x-1 hover:bg-[#1F2937] focus:outline-none "
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    
  );
};

export default PersonalInfo;
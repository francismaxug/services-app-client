import React, { useEffect, useState } from "react";
import PersonalInfo from "../../features/customer/editProfile/PersonalInfo";
import ProfilePicture from "../../features/customer/editProfile/ProfilePicture";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../../services/apiAuth";
import { useUserDetails } from "../../context/UserDetailContext";
import { useAuth } from "../../context/AuthContext";
import FullPageLoader from "../../components/common/FullPageLoader";

function UserSettings() {
  const [img, setImg] = useState(null) 
  const takeImg = (img)=>{
    setImg(img);
  }
  const navigate = useNavigate()
  const { user} = useAuth();
  const { info, dispatch, isLoading } = useUserDetails();
  console.log(info)
  console.log(isLoading)

  const token = localStorage.getItem("verifytoken");
  console.log(token)
 
  useEffect(() => {
    
    const fetchData = async () => {
      dispatch({ type: "onDetailsRequest" });
      try {
        if (!user) {
          navigate("/");
        }
        const url = getApiUrl("updateDetails");
        const config = {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(url, config);
        dispatch({type:"onDetailsSuccess" , payload: data}) 
        console.log(data);
      } catch (error) {
        dispatch({ type: "onDetailsFailure" });
        console.log(error);
      }
    };
  
    fetchData(); 
  
  }, [dispatch, navigate, user, token]);

  return (
  <>
   { isLoading ? <FullPageLoader/> : info ?(<div className="mx-auto w-full md:w-[80%] items-center justify-center flex flex-col mt-4 border rounded-sm text-center">
      <div className="mb-6 items-center justify-center">
        <h1 className="font-bold text-3xl mt-10 text-center">Profile</h1>
        <p>Add a nice photo of yourself for your profile.</p>
      </div>

      <ProfilePicture takeImg ={takeImg} photo={info?.imageOfUser} />

      {/* Personal Info */}
      <div>
        <PersonalInfo img={img}  />
      </div>
      
    </div>): null}
    </> );
}

export default UserSettings;
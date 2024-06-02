import React, { useState, useRef, useEffect } from "react";

// import { InputText } from "primereact/inputtext";

// import { Dialog } from "primereact/dialog";

const ProfilePicture = ({takeImg, photo}) => {
  const inputRef = useRef(null);
  const [uploadImg, setUploadImg] = useState(null);
  const cacheBuster = Date.now();
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleUploadImgClick = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setUploadImg(e.target.files[0]);
  };
  console.log(uploadImg);
  const an=photo? photo.replaceAll("\\","/")  :null
  console.log(an);
  // useEffect(() => {
    
  //   setUploadImg(an)
  //     },[an])
  useEffect(() => {
takeImg(uploadImg)
  },[uploadImg,takeImg])
// const handleImage= () => {
// console.log(uploadImg);
// }

// URL.createObjectURL(uploadImg)
  return (
    <>
      
        <div onClick={handleImageClick}>
          {!uploadImg? (<img src={`http://localhost:8080/${an}?cache=${cacheBuster}`}
              className="border rounded-full h-72 w-72 mb-5 cursor-pointer"
              alt=""
            />) :uploadImg ? (
            <img src={URL.createObjectURL(uploadImg)}
              className="border rounded-full h-72 w-72 mb-5 cursor-pointer"
              alt=""
            />
          ) : (
            <img
              src="../../../assets/images/forgotPasswordImage.png"
              className="border rounded-full h-72 w-72 mb-5 cursor-pointer"
              alt=""
            />
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleUploadImgClick}
            style={{ display: "none" }}
          />
        </div>
        <div className="gap-4 flex flex-row mb-3 relative ">
          <button onClick={handleImageClick} className="border px-5 py-2 rounded-md bg-[#1F2937] text-white hover:bg-transparent hover:text-[#1F2937] duration-75 translate-x-1 hover:border-[#1F2937]  ">
            Update Picture
          </button>
          <button onClick={()=>setUploadImg(null)}  className="border border-[#1F2937] px-5 py-2 rounded-md hover:text-white duration-75 translate-x-1 hover:bg-[#1F2937]">
            Remove
          </button>
        </div>
      

      {/* <div className=" mt-3">
        <div className="border rounded-full h-72 w-72 mb-5 cursor-pointer"></div>
      </div> */}
    </>
  );
};

export default ProfilePicture;
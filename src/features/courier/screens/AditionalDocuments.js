import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Radio } from 'flowbite-react';
import { FileInput, } from 'flowbite-react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { toast } from "react-hot-toast";
import axios from 'axios';

const AditionalDocuments = () => {
  const navigate = useNavigate()
  const [insured, setInsured] = useState("Yes")

  const [curve, setCurve] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [display, setDisplay] = useState(true)
  const [showInfo, setShowInfo] = useState(false)
  const [lastName, setLastName] = useState("")
  const [country, setCountry] = useState("Ghana")
  const [city, setCity] = useState("")
  const [ghCardNumber, setGhCardNumber] = useState("")
  const [licenseNumber, setLicenseNumber] = useState("")
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState("")
  const [vehicleType, setVehicleType] = useState("van")
  const [ghanaCardFront, setGhanaCardFront] = useState(null)
  const [insurancePhoto, setInsurancePhoto] = useState(null)
  const [licenseImageFront, setLicenseImageFront] = useState(null)
  const [licenseImageBack, setLicenseImageBack] = useState(null)
  const [profileImage, setProfileImage] = useState(null)


  const formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("country", country,);
  formData.append("city", city);
  formData.append("insured", insured);
  formData.append("ghCardNumber", ghCardNumber);
  formData.append("licenseNumber", licenseNumber);
  formData.append('ghanaCardFront', ghanaCardFront);
  formData.append('insurancePhoto', insurancePhoto);
  formData.append('licenseImageBack', licenseImageBack);
  formData.append('licenseImageFront', licenseImageFront);
  formData.append('profileImage', profileImage);

  const token = localStorage.getItem("verifytoken")
  const change = (e) => {
    setVehicleType(e.target.value)
    console.log(e.target.value)
  }
  const HandleSubmit = async (e) => {
    e.preventDefault()
    console.log("amen")
    const setOn = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      city: city,
      insured: insured,
      ghCardNumber: ghCardNumber,
      licenseNumber: licenseNumber,
      profileImage: profileImage,
      licenseImageBack: licenseImageBack,
      licenseImageFront: licenseImageFront,
      insurancePhoto: insurancePhoto,
      ghanaCardFront: ghanaCardFront
    }
    console.log(setOn);
    setCurve(true)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': "*",
      }
    }
    // setCurve(true)
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/uploadpersonal", formData, config)
      toast.success("personal details uploaded successfully")
      console.log(data.data);
      setCurve(false)
      setDisplay(false)
      localStorage.setItem("verifytoken", data.data)
      // setDisplay(true)
      // setAnother(true)
      // setCurve(false)
    } catch (error) {
      toast.error(error.response?.data?.message)
      console.log(error);
      setCurve(false)
    }

  }

  const HandleSubmit2 = async (e) => {
    e.preventDefault()
    console.log("amen")
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': "*",
      }
    }

    try {
      const { data } = await axios.patch("http://localhost:8080/api/v1/uploadvehicle", { vehicleType, vehiclePlateNumber }, config)
      toast.success("vehicle info uploaded successfully")
      console.log(data);
      localStorage.removeItem("verifytoken")
      navigate("/")
    } catch (error) {
      toast.error(error.response?.data?.message)
      console.log(error);
    }
    console.log("vehicle submitted")
  }
  return (
    <React.Fragment>
      <div className='w-[60%] mx-auto'>
        <h1 className='text-2xl tracking-wide text-center py-8'>Upload details to complete registration process</h1>

        <div className=' border py-2 bg-blue-700 px-3 text-white font-semibold w-40 mb-4'>Personal Details</div>
        <form className="flex max-w-md flex-col gap-4 mb-14" onSubmit={HandleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="FirstName"
                value="First Name"
              />
            </div>
            <TextInput
              id="FirstName"
              placeholder="Enter First Name"
              required
              shadow
              value={firstName}
              type="name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="LastName"
                value="Last Name"
              />
            </div>
            <TextInput
              id="LastName"
              placeholder="Enter Last Name"
              required
              shadow
              value={lastName}
              type="name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="GhanaCardNumber"
                value="Ghana Card Number"
              />
            </div>
            <TextInput
              id="GhanaCardNumber"
              placeholder="Enter Gh Card number here"
              required
              shadow
              value={ghCardNumber}
              type="text"
              onChange={(e) => setGhCardNumber(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="DriverLincesedNumber"
                value="Driver License Number"
              />
            </div>
            <TextInput
              id="DriverLincesedNumber"
              placeholder="Enter driver license number here"
              required
              shadow
              value={licenseNumber}
              type="text"
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="city"
                value="City"
              />
            </div>
            <TextInput
              id="city"
              placeholder=""
              required
              shadow
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="country"
                value="Country"
              />
            </div>
            <TextInput
              id="country"
              placeholder=""
              required
              shadow
              value={country}
              type="text"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <fieldset
            className="flex max-w-md flex-col gap-4"
            id="radio"
          >
            <legend className="mb-4">
              Is your vehicle insured?
            </legend>
            <div className="flex items-center gap-2">
              <Radio
                defaultChecked
                id="yes"
                name="option"
                value="Yes"
                className='focus:ring-0'
                onChange={(e) => setInsured(e.target.value)}
              />
              <Label htmlFor="van">
                Yes
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="yes"
                name="option"
                value="No"
                className='focus:ring-0'
                onChange={(e) => setInsured(e.target.value)}

              />
              <Label htmlFor="motocycle">
                No
              </Label>
            </div>
          </fieldset>
          {insured === "No" ? "" : (<div
            className="max-w-md"
            id="fileUpload"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="file"
                value="upload front view of insurance document"
              />
            </div>
            <FileInput
              helperText=""
              id="file"
              required
              name='ghanaCardBack'
              accept=".jpg, .png, .jpeg"
              onChange={(e) => setInsurancePhoto(e.target.files[0])}
            />
          </div>)}
          <div
            className="max-w-md"
            id="fileUpload"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="file"
                value="Upload profile photo (selfie-passport type)"
              />
            </div>
            <FileInput
              helperText="A profile picture is useful to confirm your are logged into your account"
              id="file"
              required
              name='profileImage'
              accept=".jpg, .png, .jpeg"
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
          </div>
          <div
            className="max-w-md"
            id="fileUpload"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="file"
                value="upload front view of ghana card"
              />
            </div>
            <FileInput
              helperText=""
              id="file"
              required
              name='ghanaCardFront'
              accept=".jpg, .png, .jpeg"
              onChange={(e) => setGhanaCardFront(e.target.files[0])}
            />
          </div>

          <div
            className="max-w-md"
            id="fileUpload"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="file"
                value="upload front view of drivers license"
              />
            </div>
            <FileInput
              helperText=""
              id="file"
              required
              name='ghanaCardFront'
              accept=".jpg, .png, .jpeg"
              onChange={(e) => setLicenseImageFront(e.target.files[0])}
            />
          </div>


          <div
            className="max-w-md"
            id="fileUpload"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="file"
                value="upload back view of drivers license"
              />
            </div>
            <FileInput
              helperText=""
              id="file"
              required
              name='ghanaCardFront'
              accept=".jpg, .png, .jpeg"
              onChange={(e) => setLicenseImageBack(e.target.files[0])}
            />
          </div>

          {curve ? <Button className="w-48 py-0">
            <Spinner aria-label="Spinner button example" />
            <span className="pl-3">
              Loading...
            </span>
          </Button> :
            <Button className="w-48 py-0" type="submit">
              submit personal details
            </Button>}
        </form>
        <button disabled={display && true} type='button' onClick={() => setShowInfo(true)} className={` border py-2       ${display ? "bg-blue-200" : "bg-blue-700"}   px-3 text-white font-semibold w-48 mb-4`}>click to upload vehicle information</button>
        {showInfo && <form className="flex max-w-md flex-col gap-4" onSubmit={HandleSubmit2}>
          <fieldset
            className="flex max-w-md flex-col gap-4"
            id="radio"
          >
            <legend className="mb-4">
              Please select the type of vehicle you will use
            </legend>
            <div className="flex items-center gap-2">
              <Radio
                defaultChecked
                id="van"
                name="vehicles"
                value="van"
                className='focus:ring-0'
                onChange={change}
              />
              <Label htmlFor="van">
                Van
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="motocycle"
                name="vehicles"
                value="motocycle"
                className='focus:ring-0'
                onChange={change}
              />
              <Label htmlFor="motocycle">
                Motocycle
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="bike"
                name="vehicles"
                value="bicycle"
                className='focus:ring-0'
                onChange={change}
              />
              <Label htmlFor="bike">
                Bicycle
              </Label>
            </div>
          </fieldset>
          {vehicleType !== "bicycle" && <div>
            <div className="mb-2 block">
              <Label
                htmlFor="plateNumber"
                value="Number plate of vehicle "
              />
            </div>
            <TextInput
              id="plateNumber"
              placeholder=""
              required
              shadow
              value={vehiclePlateNumber}
              type="text"
              onChange={(e) => setVehiclePlateNumber(e.target.value)}
            />
          </div>}
          <Button className="w-32 py-0" type="submit">
            submit
          </Button>
        </form>}
      </div>
    </React.Fragment>
  )

}

export default AditionalDocuments

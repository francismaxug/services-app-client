import React, { useState } from "react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const AlertComponent = ({children,color}) => {
  const [dismiss, setDismiss] = useState(false);
  return (
    <div>
      <Alert
        className={`${dismiss ? `hidden` : `block`} rounded-none `}
        color={color}
        onDismiss={() => setDismiss(true)}
        icon={HiInformationCircle}
      >
        <span>
         {children}
        </span>
      </Alert>
    </div>
  );
};

export default AlertComponent;

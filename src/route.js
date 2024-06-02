import React from "react"
import { Route, Routes, Navigate } from "react-router-dom";
import CustomerLayout from "./features/layouts/CustomerLayout";
import CourierLayout from "./features/layouts/CourierLayout";
import ShopLayout from "./features/layouts/ShopLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyPhone from "./pages/auth/VerifyPhone";
import ProtectedRoute from "./components/common/ProtectedRoute";
import AditionalDocuments from "./features/courier/screens/AditionalDocuments";
import UserSettings from "./pages/customer/UserSettings";

export default function RoutesContainer() {

  return (
    <Routes>
      {/* authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/verifyphone" element={<VerifyPhone />} />

      {/* customer routes  */}
      <Route
        path="app"
        element={
          <ProtectedRoute role="Customer">

            <CustomerLayout />
          </ProtectedRoute>
        }

      >
        {/* <Route path="uploadadditionalinfo" element={<AditionalDocuments />} /> */}
        <Route index element={<p>Customer Homepage here</p>} />
        <Route path="products" element={<p>Products here</p>} />
        <Route path="shops" element={<p>Shops here</p>} />
        <Route path="profile" element={<UserSettings />} />

        <Route path="contact_us" element={<p>Contact Us page here</p>} />
        <Route
          path="privacy_policy"
          element={<p>Privacy policy page here</p>}
        />

        <Route
          path="delete_account"
          element={<p>Delete account page here</p>}
        />
      </Route>

      {/* courier routes  */}
      <Route path="courier">
        <Route path="uploadadditionalinfo" element={<Navigate to="/courier/uploadadditionaldocuments" />} />
      </Route>
      <Route path="/courier/uploadadditionaldocuments" element={<AditionalDocuments />} />

      <Route
        path="courier"
        element={
          <ProtectedRoute role="Driver">
            <CourierLayout />
          </ProtectedRoute>
        }
      >
        {/* <Route path="uploadadditionalinfo" element={<AditionalDocuments />} /> */}
        <Route index element={<p>Courier Homepage here</p>} />
        <Route path="dashboard" element={<p>Dashboard here</p>} />
        <Route path="orders" element={<p>Orders here</p>} />
        <Route path="profile" element={<UserSettings />} />

      </Route>
      {/* <Route path="courier">
        <Route path="uploadadditionalinfo" element={<Navigate to="/new-screen" />} />
      </Route>
      <Route path="new-screen" element={<AditionalDocuments />} /> */}
      {/* shop routes  */}
      <Route
        path="shop"
        element={
          <ProtectedRoute role="Vendor">
            <ShopLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<p>Shop Homepage here</p>} />
        <Route path="dashboard" element={<p>Dashboard here</p>} />
        <Route path="products" element={<p>Products here</p>} />
        <Route path="profile" element={<UserSettings />} />
      </Route>

      <Route path="*" element={<p>Sorry. This is a 404 page!</p>} />
    </Routes>
  );
}

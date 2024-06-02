import { Outlet } from "react-router-dom";
import Navbar from "../courier/nav/Navbar";
import Page from "../../components/common/Page";

export default function CourierLayout() {
  
  return (
    <>
      <Navbar />
      <Page>
        <Outlet />
      </Page>
    </>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "../customer/nav/Navbar";
import Page from "../../components/common/Page";

export default function CustomerLayout() {
  return (
    <>
      <Navbar />
      <Page>
        <Outlet />
      </Page>
    </>
  );
}

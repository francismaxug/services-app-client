import { Outlet } from "react-router-dom";
import Navbar from "../shop/nav/Navbar";
import Page from "../../components/common/Page";

export default function ShopLayout() {
  return (
    <>
      <Navbar />
      <Page>
        <Outlet />
      </Page>
    </>
  );
}

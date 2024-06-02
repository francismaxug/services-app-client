import Navbar from "../../../components/common/Navbar";
import { title, links, dropdownItems } from "./index";
export default function CustomerNavbar() {
  return (
    <header className="fixed top-0 right-0 left-0 mb-2 shadow-sm ">
      <Navbar title={title} links={links} dropdownItems={dropdownItems} />
    </header>
  );
}

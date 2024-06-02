import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AlertComponent from "../../features/courier/components/AlertComponent";


export default function UserNavbar({ title, links, dropdownItems }) {
  const { user, dispatch } = useAuth();
  const cacheBuster = Date.now();

 const an=user?.imageOfUser? user?.imageOfUser.replaceAll("\\","/") :null
 const image = `http://localhost:8080/${an}?cache=${cacheBuster}`
 console.log(an)
  function handleSignout() {
    dispatch({ type: "auth/logout" });
  }
  return (
    <>
      {(user?.role === "Driver" &&user?.hasUploaded ) ? (
        <>
          <AlertComponent color="success"><p>
  <span className="font-medium">Info alert!</span>{" "}
      Details submitted. Response on validity will be sent to your email. Please check email in 30 minutes time. Thank you.
  </p></AlertComponent>
          <Navbar fluid rounded>
            <Navbar.Brand href="#">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                {title}
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Dropdown
                inline
                label={image?
                  <Avatar
                  alt="User settings"
                 img={user?.imageOfUser?  `http://localhost:8080/${an}?cache=${cacheBuster}`:null}
                  rounded
                />:<Avatar rounded/>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.name}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                {dropdownItems?.map((item, index) => (
                  <Dropdown.Item key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              {links?.map((link, index) => (
                <NavLink to={link.path} key={index}>
                  <p>{link.title}</p>
                </NavLink>
              ))}
            </Navbar.Collapse>
          </Navbar>
          </>
      ) : (user?.role === "Driver" && !user?.hasUploaded) ? (
        <>
        <AlertComponent color="failure">
           NOT YET VERIFIED?{" "}
          <Link className=" underline" to="uploadadditionalinfo">
            Click Here
          </Link>{" "}
          <span>to continue with the registration process</span></AlertComponent>
          <Navbar fluid rounded>
            <Navbar.Brand href="#">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                {title}
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Dropdown
                inline
                label={
                  image?
                  <Avatar
                  alt="User settings"
                 img={user?.imageOfUser?  `http://localhost:8080/${an}?cache=${cacheBuster}`:null}
                  rounded
                />:<Avatar rounded/>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.name}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                {dropdownItems?.map((item, index) => (
                  <Dropdown.Item key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              {links?.map((link, index) => (
                <NavLink to={link.path} key={index}>
                  <p>{link.title}</p>
                </NavLink>
              ))}
            </Navbar.Collapse>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar fluid rounded>
            <Navbar.Brand href="#">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                {title}
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Dropdown
                inline
                label={
                  
                  <Avatar
                    alt="User settings"
                   img={user?.imageOfUser? user?.role==="Driver"||user?.role==="Customer"||user?.role==="Vendor"? `http://localhost:8080/${an}?cache=${cacheBuster}`: user?.image:""}
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.name}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                {dropdownItems?.map((item, index) => (
                  <Dropdown.Item key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              {links?.map((link, index) => (
                <NavLink to={link.path} key={index}>
                  <p>{link.title}</p>
                </NavLink>
              ))}
            </Navbar.Collapse>
          </Navbar>
        </>
      )}
    </>
  );
}

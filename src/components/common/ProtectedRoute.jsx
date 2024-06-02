import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import FullPageLoader from "./FullPageLoader";

export default function ProtectedRoute({ role, children }) {
  const [loading, setloading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user === "null") {
      navigate("/");
    }

    // if (user && user.role !== role) {
    //   navigate("/");
    // }

    setloading(false);
  }, [user, navigate]);

  if (loading) {
    return <FullPageLoader />;
  }

  if (user && user.role !== role) {
    return (
      <p className="h-screen w-screen flex justify-center items-center">
        Sorry no access. you are not a {role}
      </p>
    );
  }
  if (user && user.role === role) {
    return children;
  }

  return children;
}

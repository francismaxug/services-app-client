import { useNavigate } from "react-router-dom";

export function useRoute() {
  const navigate = useNavigate();

  return (role) => {
    switch (role) {
      case "Customer":
        navigate("/app");
        break;

      case "Driver":
        navigate("/courier");
        break;

      case "Vendor":
        navigate("/shop");
        break;

      default:
        navigate("/");
    }
  };
}

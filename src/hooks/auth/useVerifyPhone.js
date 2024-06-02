import { useState } from "react";
import { getApiUrl } from "../../services/apiAuth";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useRoute } from "./useRoute";
import { toast } from "react-hot-toast";

export function useVerifyPhone() {
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuth();
  const route = useRoute();

  //   const navigate = useNavigate()

  async function verifyPhone(body) {
    const url = getApiUrl("approve");

    setLoading(true);
    try {
      const res = await axios.post(url, body)
      dispatch({ type: "auth/login", payload: res.data })
      toast.success("Phone verified, you'll be logged in shortly")
      route(res.data?.role);
      localStorage.setItem("verifytoken", res.data?.token)
      console.log(res.data?.token)
      console.log(res.data)

    } catch (error) {
      toast.error(error.response?.data?.message || "error logging in");
    } finally {
      setLoading(false);
    }
  }
  return { verifyPhone, loading };
}

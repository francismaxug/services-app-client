import { useState } from "react";
import { getApiUrl } from "../../services/apiAuth";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useRoute } from "./useRoute";
import { toast } from "react-hot-toast";

export function useLogin() {
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuth();
  const route = useRoute();

  async function login(body) {
    const url = getApiUrl("login");
    // const url = ""
    setLoading(true);
    try {
      const res = await axios.post(url, body);
      localStorage.setItem("verifytoken", res.data.token);
      dispatch({ type: "auth/login", payload: res.data });
      toast.success("Logged in successfully");
      route(res.data.role);
      //   navigate("/app")
      console.log(res.data.token)
      console.log(res.data)
    } catch (error) {
      toast.error(error.response?.data?.message || "error logging in");
    } finally {
      setLoading(false);
    }
  }
  return { login, loading };
}

import { useState } from "react";
import { getApiUrl } from "../../services/apiAuth";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  async function signup(body) {
    const url = getApiUrl("signup");

    setLoading(true);
    try {
      const res = await axios.post(url, body);
      console.log(res.data.user)
      if (res.data.status === "created" || "updated") {
        toast.success("Account created");
        navigate("/verifyphone");
      }
      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "error signing up");
    } finally {
      setLoading(false);
    }
  }
  return { signup, loading };
}

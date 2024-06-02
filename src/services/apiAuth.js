export function getApiUrl(action) {
  const url = `http://localhost:8080/api/v1/${action}`;

  return url;
}

// export async function signup(body) {
//   const url = getApiUrl("signup");
//   let errorMessage;
//   let data;
//   try {
//     const res = await axios.post(url, body);
//     data = res.data;
//   } catch (error) {
//     errorMessage = error.response.data.message;
//   }

//   return { data, error: errorMessage };
// }

// export async function login(body) {
//   const url = getApiUrl("login");

//   let data;
//   let errorMessage;
//   try {
//     const res = await axios.post(url, body);
//     data = res.data;
//   } catch (error) {
//     errorMessage = error.response?.data?.message;
//   }

//   return { data, error: errorMessage };
// }

// export async function verifyPhone(body) {
//   const url = getApiUrl("approve");
//   let errorMessage;
//   let data;
//   try {
//     const res = await axios.post(url, body);
//     data = res.data;
//   } catch (error) {
//     errorMessage = error.response.data.message;
//   }

//   return { data, error: errorMessage };
// }

// export function handleLoginRole(role) {
//   switch (role) {
//     case "Customer":
//       navigate("/app");

//     case "Driver":
//       navigate("/courier");

//     case "Vendor":
//       navigate("/shop");

//     default:
//       navigate("/");
//   }
// }

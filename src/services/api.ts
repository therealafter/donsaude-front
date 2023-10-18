import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 429) {
//       toast.error("Muitas requisições, tente novamente mais tarde");
//     }
//     return Promise.reject(error);
//   }
// );

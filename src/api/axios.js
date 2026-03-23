// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // Automatically attach token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default api;


import axios from "axios";

// 1. Use the Vercel Environment Variable for the baseURL
const api = axios.create({ 
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000" 
});

// 2. Attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 3. Match the name! (api lowercase matches const api lowercase)
export default api;

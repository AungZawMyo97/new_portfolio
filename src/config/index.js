const isProduction = import.meta.env.NODE_ENV === "production";

export const API_BASE_URL = isProduction
  ? "https://api.myproductionurl.com/api"
  : "http://localhost:3000/api";

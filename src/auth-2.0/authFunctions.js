const axios = require("axios");
export async function googleLogin(token) {
  try {
    const response = await axios.post(
      process.env.REACT_APP_SERVER_ROUTE + "/instructor/google-sign-in",
      {
        authHeader: `Bearer ${token}`,
      }
    );
    console.log(response);
    return response.data;
  } catch (err) {
    if (err.response.status === 500) throw new Error("Log In Failed.");
    else throw new Error(err);
  }
}

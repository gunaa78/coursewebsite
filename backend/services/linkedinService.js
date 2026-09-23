const axios = require("axios");


// ============================================
// GET LINKEDIN ACCESS TOKEN
// ============================================

const getLinkedInAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",

      new URLSearchParams({
        grant_type: "client_credentials",

        client_id:
          process.env.LINKEDIN_CLIENT_ID,

        client_secret:
          process.env.LINKEDIN_CLIENT_SECRET,
      }).toString(),

      {
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;

  } catch (error) {

    console.error(
      "LinkedIn Token Error:",
      error.response?.data ||
        error.message
    );

    throw error;
  }
};


// ============================================
// LINKEDIN API REQUEST
// ============================================

const linkedinRequest = async (
  method,
  url,
  data = null
) => {

  const token =
    await getLinkedInAccessToken();

  try {

    const response =
      await axios({
        method,
        url,

        data,

        headers: {
          Authorization:
            `Bearer ${token}`,

          "LinkedIn-Version":
            process.env.LINKEDIN_VERSION,

          "Content-Type":
            "application/json",
        },
      });

    return response.data;

  } catch (error) {

    console.error(
      "LinkedIn API Error:",
      error.response?.status,
      error.response?.data ||
        error.message
    );

    throw error;
  }
};


// ============================================
// EXPORT
// ============================================

module.exports = {
  getLinkedInAccessToken,
  linkedinRequest,
};
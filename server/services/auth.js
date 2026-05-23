const msal = require("@azure/msal-node");

const config = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
  },
};


const pca = new msal.PublicClientApplication(config);

async function getAccessToken() {
  const deviceCodeRequest = {
    scopes: ["https://analysis.windows.net/powerbi/api/Dataset.ReadWrite.All"],

    deviceCodeCallback: (response) => {
      console.log(response.message);
    },
  };

  const response = await pca.acquireTokenByDeviceCode(deviceCodeRequest);

  return response.accessToken;
}

module.exports = getAccessToken;

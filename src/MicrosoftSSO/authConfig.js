// src/authConfig.js
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "fabc0e2d-c69f-4b63-a2c1-52da167113f7",
        authority: "https://login.microsoftonline.com/cd92bb82-dddf-47a8-a155-02851486fd74",
        // redirectUri: "https://auth.optisigns.com/__/auth/handler",
        redirectUri: "https://chat-fe-x30q.onrender.com",
    },
    cache: {
        cacheLocation: "sessionStorage", // Đây là tùy chọn, bạn có thể dùng "sessionStorage"
        storeAuthStateInCookie: true, // Đây là tùy chọn
    }
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;

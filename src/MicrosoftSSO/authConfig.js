// src/authConfig.js
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "dee41533-cfca-4aff-8f47-3a279aaf4adb",
        authority: "https://login.microsoftonline.com/cd92bb82-dddf-47a8-a155-02851486fd74",
        redirectUri: "https://auth.optisigns.com/__/auth/handler",
    },
    cache: {
        cacheLocation: "localStorage", // Đây là tùy chọn, bạn có thể dùng "sessionStorage"
        storeAuthStateInCookie: true, // Đây là tùy chọn
    }
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;

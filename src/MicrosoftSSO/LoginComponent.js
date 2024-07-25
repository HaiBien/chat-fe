import React from "react";
import { useMsal } from "@azure/msal-react";

const LoginMS = () => {
    const { instance, accounts } = useMsal();

    const handleLogin = () => {
        instance.loginPopup().catch(e => {
            console.error(e);
        });
    };

    const handleLogout = () => {
        instance.logoutPopup().catch(e => {
            console.error(e);
        });
    };

    return (
        <div>
            <h1>React Microsoft Login</h1>
            {accounts.length > 0 ? (
                <div>
                    <h2>Welcome, {accounts[0].name}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Sign in with Microsoft</button>
            )}
        </div>
    );
};

export default LoginMS;

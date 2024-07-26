import React, {useState} from "react";
import { useMsal } from "@azure/msal-react";
import {loginRequest} from "./authConfig";
import {callMsGraph} from './graph';
const LoginMS = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

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

    const RequestProfileData = () => {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then((response) => {
                callMsGraph(response.accessToken).then((response) => setGraphData(response));
            });
    }

    console.log("accounts", accounts)
    console.log("graphData", graphData)

    return (
        <div>
            <h1>React Microsoft Login</h1>
            {accounts.length > 0 ? (
                <div>
                    <h2>Welcome, {accounts[0].name}</h2>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={RequestProfileData}> RequestPro </button>
                </div>
            ) : (
                <button onClick={handleLogin}>Sign in with Microsoft</button>
            )}
        </div>
    );
};

export default LoginMS;

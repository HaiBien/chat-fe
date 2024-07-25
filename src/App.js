import './App.css';
import LoginFacebook from './LoginFacebook';
import Avatar from './Avatar'
import MicrosoftLogin from "react-microsoft-login";
import MicrosoftLogin2 from "./MicrosoftSSO/LoginComponent";

function App() {
    const authHandler = (err, data) => {
        console.log(err, data);
    };
    return (
        <div className="App">
            <LoginFacebook/>
            <MicrosoftLogin
                clientId="dee41533-cfca-4aff-8f47-3a279aaf4adb"
                authCallback={authHandler}

            />
            <MicrosoftLogin2 />
            <Avatar name=" Hải Bien"/>
            <Avatar name="le bin HO"/>
            <img src={"https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=122121079694140706&height=50&width=50&ext=1712219031&hash=AfrOTFzCOJchVDCZEL6ewOFE3887TwNqQ1SPrJ1tUdXzRw"} />
        </div>
    );
}

export default App;

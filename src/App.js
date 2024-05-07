import './App.css';
import LoginFacebook from './LoginFacebook';
import Avatar from './Avatar'

function App() {

    return (
        <div className="App">
            <LoginFacebook/>
            <Avatar name=" Hải Bien"/>
            <Avatar name="le bin HO"/>
            <img src={"https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=122121079694140706&height=50&width=50&ext=1712219031&hash=AfrOTFzCOJchVDCZEL6ewOFE3887TwNqQ1SPrJ1tUdXzRw"} />
        </div>
    );
}

export default App;

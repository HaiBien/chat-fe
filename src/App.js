import './App.css';
import FacebookLogin from 'react-facebook-login';
import FbLogin from './FbLogin';

function App() {

  const responseFacebook = (response) => {
    if (response) {
      console.log('response', response)
    }
  };

  const handleFacebookLogin = () => {
    console.log('document.getElementById("msgbtn")', document.getElementById("msgbtn"))
    document.getElementById("msgbtn").click();
    let cl = document.getElementsByClassName("msgbtn");
    console.log('cl', cl)
  };

  return (
    <div className="App">
      <FbLogin />
    </div >
  );
}

export default App;

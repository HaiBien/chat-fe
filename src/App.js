import './App.css';
import FacebookLogin from 'react-facebook-login';

function App() {

  const responseFacebook = (response) => {
    if (response) {
      console.log('response', response)
    }
  };

  const handleFacebookLogin = () => {
    // Xử lý đăng nhập Facebook ở đây
  };

  return (
    <div className="App">
      <button onClick={handleFacebookLogin}>Đăng nhập bằng Facebook</button>
      <FacebookLogin
        style={{ display: 'none' }}
        appId="1358287981761652"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}

export default App;

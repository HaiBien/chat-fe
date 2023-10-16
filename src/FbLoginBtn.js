import React from 'react';
import FacebookLogin from 'react-facebook-login';

function App() {
  const responseFacebook = (response) => {
    console.log('Thông tin đăng nhâp FB: ', response);
  };

  return (
    <div>
      <FacebookLogin
        appId="291801013674575"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}

export default App;

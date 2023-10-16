import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

function App() {

  const [userFB, setUserFB] = useState(null)

  const responseFacebook = (response) => {
    if (response) setUserFB(response)
    console.log('Thông tin đăng nhâp FB: ', response);
  };

  return (
    <div>
      {userFB && <><img src={userFB.picture?.data?.url} /> <b>{userFB.name}</b></>}
      <FacebookLogin
        appId="291801013674575"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <div onClick={renderProps.onClick}>
            <button>
              Tích hợp vào Facebook Fanpage
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default App;

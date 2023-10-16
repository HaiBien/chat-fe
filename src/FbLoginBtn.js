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
      <div style={{ margin: '0 auto' }}>
        {userFB &&
          <>
            <img style={{ borderRadius: '50%' }} src={userFB.picture?.data?.url} />
            <span style={{ fontWeight: 500 }}>{userFB.name}
            </span>
          </>}
      </div>
      <FacebookLogin
        appId="291801013674575"
        autoLoad={false}
        scope="public_profile,email"
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

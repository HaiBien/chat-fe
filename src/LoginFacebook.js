import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const App = () => {
  const [userAccessToken, setUserAccessToken] = useState(null);
  const [fanpages, setFanpages] = useState([]);

  const responseFacebook = (response) => {
    console.log(response);
    setUserAccessToken(response.accessToken);
    fetchFanpages(response.accessToken)
  };

  const fetchFanpages = async (token = userAccessToken) => {
    const response = await fetch(`https://graph.facebook.com/v18.0/me/accounts?fields=name,picture&access_token=${token}`);
    const data = await response.json();
    console.log('data', data);
    setFanpages(data.data);
  };

  return (
    <div>
      <h1>Đăng nhập Facebook và lấy danh sách fanpage</h1>
      <FacebookLogin
        appId="895989838589526"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,email,pages_show_list"
        callback={responseFacebook}
      />
      {userAccessToken && (
        <div>
          {fanpages.map((fanpage) => {
            return <div class="d-flex position-relative">
              <div class="me-3">
                <img
                  style={{ borderRadius: '50%', border: '1px solid gray' }}
                  src={fanpage?.picture?.data?.url}
                  width="44px" />
              </div>
              <div class="flex-fill">
                <div class="fw-bold">{fanpage.name}</div>
                <div class="small text-secondary">{fanpage.id}</div>
              </div>
            </div>
          })}
        </div>
      )}
    </div>
  );
};

export default App;


{/* <li key={fanpage.id}>
   {fanpage.name} - {fanpage.category}
 </li> */}
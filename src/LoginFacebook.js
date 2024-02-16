/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const GRANT_TYPE = 'fb_exchange_token'
const CLIENT_ID = '895989838589526'
const CLIENT_SECRET = '1ac8787c421d716fddab7af68276d5d8'

const App = () => {
  const [userAccessToken, setUserAccessToken] = useState(null);
  const [fanpages, setFanpages] = useState([]);

  const responseFacebook = (response) => {
    console.log('response', response)
    const accessToken = fetchLongAccessToken(response.accessToken);
    setUserAccessToken(accessToken)
    fetchFanpages(accessToken)
  };

  const fetchLongAccessToken = async (accessToken) => {
    console.log('accessToken: ', accessToken)
    const params = `grant_type=${GRANT_TYPE}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&fb_exchange_token=${accessToken}`
    const response = await fetch(`https://graph.facebook.com/v18.0/oauth/access_token?${params}`);
    const data = await response.json();
    console.log('datadatadata', data)
    console.log('fetchLongAccessToken', response)
    const longAccessToken = response.access_token
    return longAccessToken
  }

  const fetchFanpages = async (token = userAccessToken) => {
    const response = await fetch(`https://graph.facebook.com/v18.0/me/accounts?fields=name,access_token,picture&access_token=${token}`);
    const data = await response.json();
    console.log('pages', data.data)
    setFanpages(data.data);
  };

  return (
    <div>
      <h1>Đăng nhập Facebook và lấy danh sách fanpage</h1>
      <FacebookLogin
        appId="895989838589526"
        fields="name,email,picture"
        scope="public_profile,email,pages_show_list,pages_manage_metadata,pages_messaging"
        // scope="public_profile,email,pages_show_list"
        callback={responseFacebook}
        render={renderProps => (
          <button onClick={renderProps.onClick}>This is my custom FB button</button>
        )}
      />
      {userAccessToken && (
        <div>
          {fanpages.map((fanpage) => {
            return <div class="d-flex position-relative">
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes */}
              <div class="me-3">
                {/* eslint-disable-next-line jsx-a11y/alt-text, jsx-a11y/alt-text */}
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

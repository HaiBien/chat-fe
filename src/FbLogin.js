import React, { useState, useEffect } from 'react';

function FacebookLogin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserinfo] = useState(null);

  const checkLoginStatus = () => {
    // Kiểm tra trạng thái đăng nhập của người dùng, ví dụ: sử dụng Facebook SDK
    window.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        console.log('response.status', response)
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '291801013674575',
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });
    };
  
    // Đợi tới khi SDK được tải
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
        checkLoginStatus();
    };
    document.head.appendChild(script);
  }, []);

  const handleLoginClick = () => {
    // Thực hiện yêu cầu đăng nhập Facebook
    window.FB.login(response => {
      if (response.status === 'connected') {
        console.log('response', response)
        setLoggedIn(true);
      }
    });
  };

  const handleLogoutClick = () => {
    // Thực hiện đăng xuất khỏi Facebook
    window.FB.logout(response => {
      setLoggedIn(false);
    });
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Bạn đã đăng nhập vào Facebook.</p>
          <button onClick={handleLogoutClick}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <p>Bạn chưa đăng nhập vào Facebook.</p>
          <button onClick={handleLoginClick}>Đăng nhập bằng Facebook</button>
        </div>
      )}
    </div>
  );
}

export default FacebookLogin;
// Import các thư viện cần thiết
import React, { useState, useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

// Tạo một function component Login
function Login() {
  // Sử dụng useState hook để khai báo state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [fanpages, setFanpages] = useState([]);

  // Sử dụng useEffect hook để gọi hàm lấy danh sách fanpage khi accessToken thay đổi
  useEffect(() => {
    if (accessToken) {
      getFanpages();
    }
  }, [accessToken]);

  // Xử lý sự kiện đăng nhập thành công
  const responseFacebook = (response) => {
    // Cập nhật state với dữ liệu từ response
    setIsLoggedIn(true);
    setUserID(response.userID);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
    setAccessToken(response.accessToken);
  };

  // Xử lý sự kiện đăng xuất
  const logout = () => {
    // Đặt lại state về giá trị ban đầu
    setIsLoggedIn(false);
    setUserID("");
    setName("");
    setEmail("");
    setPicture("");
    setAccessToken("");
    setFanpages([]);
  };

  // Hàm lấy danh sách fanpage của tài khoản
  const getFanpages = () => {
    // Sử dụng axios để gọi API của Facebook Graph
    axios
      .get(
        `https://graph.facebook.com/v12.0/me/accounts?access_token=${accessToken}`
      )
      .then((res) => {
        // Lấy dữ liệu từ res và cập nhật state
        setFanpages(res.data.data);
      })
      .catch((err) => {
        // Xử lý lỗi nếu có
        console.error(err);
      });
  };

  // Hàm render giao diện
  const renderContent = () => {
    // Kiểm tra trạng thái đăng nhập
    if (isLoggedIn) {
      // Nếu đã đăng nhập, hiển thị thông tin tài khoản và danh sách fanpage
      return (
        <div>
          <img src={picture} alt={name} />
          <h2>Xin chào, {name}</h2>
          <p>Email: {email}</p>
          <button onClick={logout}>Đăng xuất</button>
          <h3>Danh sách fanpage của bạn:</h3>
          <ul>
            {fanpages.map((fanpage) => (
              <li key={fanpage.id}>
                <img src={fanpage.picture.data.url} alt={fanpage.name} />
                <p>{fanpage.name}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      // Nếu chưa đăng nhập, hiển thị nút đăng nhập facebook
      return (
        <FacebookLogin
          appId="895989838589526" // Thay bằng id ứng dụng facebook của bạn
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,email,manage_pages"
          callback={responseFacebook}
        />
      );
    }
  };

  // Trả về giao diện
  return <div>{renderContent()}</div>;
}

// Xuất component Login
export default Login;
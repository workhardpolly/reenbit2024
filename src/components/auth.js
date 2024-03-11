import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { login, logout } from '../redux/actions/authHandler';
import { useDispatch, useSelector } from 'react-redux';

export default function Auth() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer);

  const handleLogin = (credentialResponse) => {
    const resData = jwtDecode(credentialResponse.credential);
    return dispatch(login(resData));
  };

  const handleLogout = () => {
    return dispatch(logout());
  };

  return (
    <div className="user-data-wrapper">
      {Object.values(user).length > 0 ? (
        <div className="user-data-content">
          <img src={user.picture} className="user-data-avatar"></img>
          <div className="user-data-name">{user.name}</div>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      ) : (
        <div className="login-button">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              return handleLogin(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            type="icon"
            // useOneTap="true"
            auto_select="true"
            ux_mode="popup"
          />
        </div>
      )}
      {}
    </div>
  );
}

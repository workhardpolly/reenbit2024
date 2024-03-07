import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions/login';

export default function GoogleLogin() {
  //   const [user, setUser] = useState({});
  const user = useSelector((state) => state.loginReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInBlock'), { theme: 'filled_black', size: 'medium' });

    //  google.accounts.id.prompt();
  }, []);

  function handleCallbackResponse(responce) {
    const userObject = jwtDecode(responce.credential);

    dispatch(login(userObject));
    document.getElementById('signInBlock').hidden = true;
  }

  function handleSignOut(e) {
    dispatch(logout());
    document.getElementById('signInBlock').hidden = false;
  }

  return (
    <div className="signin-wrapper">
      <div id="signInBlock" className="signin-button"></div>
      {user && Object.keys(user).length != 0 && (
        <div className="user-data-container">
          <img className="user-data-avatar" src={user.picture}></img>
          <p className="user-data-name">{user.name}</p>
          <button
            className="user-data-signout"
            id="signOutButton"
            onClick={(e) => {
              handleSignOut(e);
            }}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

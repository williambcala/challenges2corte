import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Login;

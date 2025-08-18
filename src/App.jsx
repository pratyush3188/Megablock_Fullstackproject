import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './component';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login(userdata));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        // Ignore "Unauthorized" errors (no session)
        if (error.code !== 401) {
          console.error("Error fetching current user:", error);
        }
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return null; // You could replace this with a loader/spinner
  }

  return (
    <div >
      <div >
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;

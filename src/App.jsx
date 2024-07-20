import { useState, useEffect } from "react";
import "./App.css";
import { Header, Footer } from "./components/index";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div classNameName="min-h-screen w-full flex flex-wrap content-center bg-gray-400">
        <div classNameName="w-full">
          <div className="border-gray-300 m-auto h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
      </div>
    );
  }
  return (
    <div classNameName="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div classNameName="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
